const mongoose = require("mongoose");

const organogramSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    designation: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      default: "",
    },

    // Department (AI Lab, Drone Lab, AR/VR Lab, etc.)
    department: {
      type: String,
      default: "General",
      trim: true,
    },

    // Parent Node Reference
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organogram",
      default: null,
    },

    // Display Order
    order: {
      type: Number,
      default: 0,
    },

    // Visibility Control
    isVisible: {
      type: Boolean,
      default: true,
    },

    // Expand / Collapse Support
    expanded: {
      type: Boolean,
      default: true,
    },

    // Future Admin Tracking
    createdBy: {
      type: String,
      default: "",
    },

    updatedBy: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Organogram",
  organogramSchema
);