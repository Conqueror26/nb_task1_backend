const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  agenda: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  guest: {
    type: String,
    required: true,
  },
  creator: {
    // type: Schema.Types.ObjectId,
    type: String,
    ref: "User",
  },
});

module.exports = mongoose.model("Event", eventSchema);
