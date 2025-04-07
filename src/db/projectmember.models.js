"use strict";

import mongoose, { Schema } from "mongoose";
import { AvailableUserRoles, UserRolesEnum } from "../constants.js";

// Project Member Schema
const projectMemberSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    project: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    role: {
      type: String,
      enum: AvailableUserRoles,
      default: UserRolesEnum.MEMBER,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: String,
      default: "SYSTEM",
    },
    modifiedBy: {
      type: String,
      default: "SYSTEM",
    },
  },
  {
    timestamps: true,
  },
);

// Project Member Model
const ProjectMember = mongoose.model("ProjectMember", projectMemberSchema);

export default ProjectMember;
