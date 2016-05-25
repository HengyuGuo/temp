var mongoose = require('mongoose')

var finalExamSchema = new mongoose.Schema({
	val : String
})



finalExamSchema.statics = {
	fetch: function(cb){
		return this
			.find({})
			exec(cb)
	},
	findById: function(id, cb) {
		return this
			.findOne({_id:id})
			exec(cb)
	}
}

module.exports = finalExamSchema