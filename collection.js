const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const collectionSchema = new mongoose.Schema(
  {
    collection_name: {
      type: String,
      required: true,
    },

    added_by: {
      type: ObjectId,
      ref: "Admin",
      required: true,
    },
    updated_by: {
      type: ObjectId,
      ref: "Admin",
      required: false,
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Collection", collectionSchema, "categories");
