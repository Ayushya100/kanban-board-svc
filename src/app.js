"use strict";

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import { fileURLToPath } from "url";
import path from "path";
import * as OpenApiValidator from "express-openapi-validator";

import { errorHandler } from "./middlewares/index.js";
import routes from "./routes/index.js";
import { SVC_API, COOKIE_OPTIONS } from "./constants.js";

const app = express();

// Setting up Middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(
  express.json({
    limit: "128kb", // Maximum request body size
  }),
);

app.use(
  express.urlencoded({
    limit: "64kb",
    extended: false,
  }),
);

app.use(
  rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100, // Limit each IP to 100 requests per window MS
  }),
);

app.use(express.static("public"));

app.use(cookieParser(COOKIE_OPTIONS));

// OpenAPI validation
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const openapiSpec = path.join(__dirname, "openapi.yaml");

app.use(
  OpenApiValidator.middleware({
    apiSpec: openapiSpec,
    validateRequests: true,
    validateResponses: true,
  }),
);

// Health Check Routes
app.get(`${SVC_API}/health`, routes.healthCheck);

// Error Handler Middleware
app.use(errorHandler);

export default app;
