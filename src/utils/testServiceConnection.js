"use strict";

import axios from "axios";
import { generalServiceConfig } from "../constants.js";
import logger from "./logger.js";

const log = logger("service-connection-test");

const testServiceConnection = async (serviceName, HOST, PORT, PROTOCOL) => {
  let response = null;
  let error = null;
  let retry = 0;
  const timeout = generalServiceConfig.timeout;
  const retries = generalServiceConfig.retries;

  while (retry < retries) {
    try {
      const API = `${PROTOCOL}://${HOST}:${PORT}/${serviceName}/api/v1.0/health`;
      response = await axios.get(API, {
        timeout: timeout,
      });
      break;
    } catch (err) {
      if (retry < retries) {
        log.error(`[${serviceName}] Health Check API call failed! Retrying...`);
      } else {
        log.error(`[${serviceName}] Health Check API call failed!`);
      }

      error = err;
      retry++;
    }
  }

  if (response) {
    log.info(
      `[${serviceName}] Health check for service succeeded. Status : ${response.status}`,
    );
    return response.data;
  } else {
    log.error(
      `[${serviceName}] Health check for service failed! Error : ${error}`,
    );
    throw new Error("Connection failed!");
  }
};

export default testServiceConnection;
