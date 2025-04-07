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

const DB_NAME = "Kanban";

const SALT_ROUNDS = 10;

const UserRolesEnum = {
  ADMIN: "admin",
  PROJECT_ADMIN: "project_admin",
  MEMBER: "member",
};

const AvailableUserRoles = Object.values(UserRolesEnum);

const TaskStatusEnum = {
  TODO: "todo",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
};

const AvailableTaskStatus = Object.values(TaskStatusEnum);

export {
  SVC_API,
  COOKIE_OPTIONS,
  generalServiceConfig,
  DB_NAME,
  SALT_ROUNDS,
  UserRolesEnum,
  AvailableUserRoles,
  TaskStatusEnum,
  AvailableTaskStatus,
};
