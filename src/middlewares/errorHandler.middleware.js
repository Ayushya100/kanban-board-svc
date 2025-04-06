"use strict";

import { buildApiError } from "../utils/index.js";

const errorHandler = (err, req, res, next) => {
  res.staus(err.status).json(buildApiError(err));
};

export default errorHandler;
