"use strict";

import mongoose, { Schema } from "mongoose";

// Project Notes Schema
const projectNoteSchema = new Schema(
  {
    project: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: true,
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

// Project Notes Model
const ProjectNote = mongoose.model("ProjectNote", projectNoteSchema);

export default ProjectNote;
