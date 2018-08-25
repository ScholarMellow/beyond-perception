let mongoose = require('mongoose');

//articles schema
let beyondperceptionSchema = mongoose.Schema({
/*	title:{
		type: String,
		required: true
	},
	author:{
		type: String,
		required: true

	},
	body:{
		type: String,
		required: true
	}*/
});

let BeyondPerception = module.exports = mongoose.model('beyondperception', beyondperceptionSchema)
