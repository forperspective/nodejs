var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var commentsSchema = mongoose.Schema({
    comments             : {
	username     :String,
	userid     :String,
    content   : String,
    created   : Date
    }
});
commentsSchema.methods.getAll = function(request, response){

	
};

module.exports = mongoose.model('Comments', commentsSchema);
