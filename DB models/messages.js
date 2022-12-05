"use strict";

let mongoose = require("./db.server.connect"),
  Schema = mongoose.Schema,
  _ = require("underscore");

var Messages = new Schema({

  channelId:{type: String,trim: true},
  text:{type: String,trim: true},
  url:{type: String,trim: true},
  button_text:{type: String,trim: true},
  userName:{type: String,trim: true},

});


module.exports = mongoose.model("message", Messages);