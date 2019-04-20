const moongoose = require("mongoose");
const Schema = moongoose.Schema;

const User = new Schema({
  username: {
    type: String
  },
  name: {
    type: String
  },
  password: {
    type: String
  },
  pastData: [
    {
      time: { type: String }
    }
  ],
  mon: [
    {
      time: { type: String }
    }
  ],
  tue: [
    {
      time: { type: String }
    }
  ],
  wed: [
    {
      time: { type: String }
    }
  ],
  thu: [
    {
      time: { type: String }
    }
  ],
  fri: [
    {
      time: { type: String }
    }
  ],
  sat: [
    {
      time: { type: String }
    }
  ],
  sun: [
    {
      time: { type: String }
    }
  ],

  song: [
    {
      title: { type: String }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = moongoose.model("User", User);
