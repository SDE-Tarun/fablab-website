const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    thumbnail: {
      type: String,
      default: "",
    },

    videoUrl: {
      type: String,
      required: true,
    },

    sourceType: {
      type: String,
      enum: [
        "youtube",
        "cloudinary",
        "local",
      ],
      default: "youtube",
    },

    category: {
      type: String,
      enum: [
        "drone",
        "ai",
        "ar-vr",
        "mechatronics",
        "events",
        "research"
      ],
      default: "research",
    },

    featured: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: [
        "active",
        "inactive",
      ],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.model(
    "Video",
    videoSchema
  );