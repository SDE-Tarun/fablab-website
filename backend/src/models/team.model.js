const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    designation: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      required: true,
    },

    bio: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      default: "",
    },

    linkedin: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      enum: [
        "leadership",
        "research",
        "engineering",
      ],
      default: "research",
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
  "Team",
  teamSchema
);