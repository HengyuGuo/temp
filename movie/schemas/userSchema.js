var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
	username: String,
    password: String,
    email: String,
	val: String,

})



userSchema.statics = {
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

module.exports = userSchema