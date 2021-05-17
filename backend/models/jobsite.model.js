const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobsiteSchema = new Schema(
  {
    jobsite: {
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

const Jobsite = mongoose.model("Jobsite", jobsiteSchema);

module.exports = Jobsite;
