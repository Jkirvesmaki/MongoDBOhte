const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workdaySchema = new Schema(
  {
    name: { type: String, required: true },
    jobsite: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
    wage: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Workday = mongoose.model("Workday", workdaySchema);

module.exports = Workday;
