"use strict";

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { logger } from "../utils/index.js";

const log = logger("db-connection");

const dbConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`,
    );
    log.info(
      `Mongo DB connection established. DB HOST: ${connectionInstance.connection.host}:${connectionInstance.connection.port}/${connectionInstance.connection.name}`,
    );
  } catch (err) {
    log.error(`MongoDB connection error: ${err}`);
    process.exit(1); // Exit the app on db connection error
  }
};

export default dbConnection;
