"use strict";

import app from "./app.js";
import dotenv from "dotenv";
import os from "os";
import { logger } from "./utils/index.js";
import { testServiceConnection } from "./utils/index.js";

const log = logger("service-connection");

dotenv.config({
  path: "./env",
});

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3000;
const PROTOCOL = process.env.PROTOCOL || "http";

app.listen(PORT, HOST, () => {
  log.info(`[Kanban SVC] Server is running on port : ${PORT}`);
  log.info(
    `Uptime : ${process.uptime()} seconds | Timestamp : ${Date.now()} | Hostname : ${os.hostname()}`,
  );
});

testServiceConnection("kanban-svc", HOST, PORT, PROTOCOL);
