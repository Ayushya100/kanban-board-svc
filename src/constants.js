"use strict";

const SVC_API = "/kanban-svc/api/v1.0";

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: true,
};

const generalServiceConfig = {
  timeout: 5000,
  retries: 3,
};

export { SVC_API, COOKIE_OPTIONS, generalServiceConfig };
