"use strict";

import { responseMessage } from "../assets/response-codes.js";

/*
 * ApiResponse class to handle all the responses.
 * @param {number}
 * @param {string}
 * @param {object}
 * @param {string}
 * @returns {} - returns nothing.
 */

class ApiResponse {
  constructor(statusCode, message = "Success", data = []) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = statusCode < 400;
  }
}

/*
 * Builds the response object.
 * @param {object} res - the response object.
 * @param {ApiResponse} apiResponse - the api response object.
 * @returns {object} - returns the response object.
 */

const buildApiResponse = (res) => {
  const apiResponse = new ApiResponse(
    res.status || 400,
    `${res.message} - ${responseMessage[res.status]}`,
    res.data || [],
  );

  return apiResponse;
};

export default buildApiResponse;
