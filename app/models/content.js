var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var contentSchema = mongoose.Schema({
    content             : {
	title     :String,
    content   : String,
    content   : String,
    created   : Date
    }
});
contentSchema.methods.getAll = function(request, response){

	
};

module.exports = mongoose.model('Content', contentSchema);
