const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

const Worker = mongoose.model("Worker", workerSchema);

module.exports = Worker;
