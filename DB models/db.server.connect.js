"use strict";

let mongoose = require("mongoose");
var url = 'mongodb+srv://gupta_karan9896:Karan321@cluster0.7ngvxfy.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  }
).then((err)=>{
  console.log("db is connect scc");
}).catch((err)=>{
  console.log("here is ",err)
});

let timestamps = require("mongoose-timestamp");

mongoose.plugin(timestamps, {
  createdAt: "created_at",
  updatedAt: "modified_at",
});

module.exports = mongoose;