var mongoose = require('mongoose')

var finalExamSchema = require('../schemas/finalSchema')

var finalExam = mongoose.model('finalExam', finalExamSchema)

module.exports = finalExam