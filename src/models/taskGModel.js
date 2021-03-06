'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TaskGSchema = Schema({
  TaskDescription: String,
  TaskStatus: String,
  TaskPriority: Number,
  MemberId: {type: Schema.ObjectId, ref: 'Member'}
})

module.exports = mongoose.model('TaskG', TaskGSchema);
