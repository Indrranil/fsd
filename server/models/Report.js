// server/models/report.js
//

const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema ({
	website: {
		type: String,
		required: true,
	},

	issue: {
		type: String,
		required: true,

	},

	user: {
		type: String,
		required: true,
	},

	country: {
		type: String,
		required: true,
	},

	timestamp: {
		type: Data,
		default: Date.now,
	},
});

const Report = mongoose.model('Report',reportSchema);

module.exports = Report;
