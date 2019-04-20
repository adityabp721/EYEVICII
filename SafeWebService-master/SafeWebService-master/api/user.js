const express = require("express");
const router = express.Router();
const User = require("../models/User");
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
router.get("/", (req, res) => {
  res.send({ msg: "Test" });
});
router.get("/all", (req, res) => {
  User.find((err, users) => {
    if (err) {
      return res.status(404).send(err);
    }
    if (users) {
      return res.status(200).json(users);
    } else {
      return res.status(404).send("No users in Database");
    }
  });
});
router.get("/username/:username", (req, res) => {
  User.findOne({ username: req.params.username })
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send({ user: "Cannot find the user" });
    });
});
router.post("/", (req, res) => {
  const user = {
    username: req.body.username,
    name: req.body.name,
    password: req.body.pwd
  };
  User.findOne({ username: req.body.username }).then(result => {
    if (result) {
      res.send({ msg: "User already exists" });
    } else {
      new User(user)
        .save()
        .then(res => {
          res.status(200).send({ msg: "Added successfully" });
        })
        .catch(err => {
          res.send(err);
        });
    }
  });
});
router.post("/count", (req, res) => {
  User.findOne({ username: req.body.username }).then(result => {
    if (result) {
      data = {
        time: new Date().toLocaleString()
      };
      d = new Date().getDay();
      if (d === 0) {
        result.sun.push(data);
      } else if (d === 1) {
        result.mon.push(data);
      } else if (d === 2) {
        result.tue.push(data);
      } else if (d === 3) {
        result.wed.push(data);
      } else if (d === 4) {
        result.thu.push(data);
      } else if (d === 5) {
        result.fri.push(data);
      } else if (d === 6) {
        result.sat.push(data);
      }
      result.save().then(user => res.status(200).send(user));
    } else {
      res.send({ msg: "Cannot find the user" });
    }
  });
});
module.exports = router;
