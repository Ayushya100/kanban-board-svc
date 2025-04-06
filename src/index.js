"use strict";

import app from "./app.js";
import dotenv from "dotenv";
import os from "os";

dotenv.config({
  path: "./env",
});

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3000;
const PROTOCOL = process.env.PROTOCOL || "http";

app.listen(PORT, HOST, () => {
  console.log(`[Kanban SVC] Server is running on port : ${PORT}`);
  console.log(
    `Uptime : ${process.uptime()} seconds | Timestamp : ${Date.now()} | Hostname : ${os.hostname()}`,
  );
});
