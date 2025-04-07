"use strict";

import mongoose, { Schema } from "mongoose";

// Sub-task Schema
const subTaskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    task: {
      type: Schema.Types.ObjectId,
      ref: "Task",
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
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

// SubTask Model
const SubTask = mongoose.model("SubTask", subTaskSchema);

export default SubTask;
