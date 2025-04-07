"use strict";

import mongoose, { Schema } from "mongoose";

// Project Schema
const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
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

// Project Model
const Project = mongoose.model("Project", projectSchema);

export default Project;
