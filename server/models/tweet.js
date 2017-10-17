var mongoose = require('mongoose');

var tweetSchema = mongoose.Schema({
    field1json: Object
});

module.exports = mongoose.model('Tweet', tweetSchema);

// sample
// var tweetSchema = new Schema({
//     created_at: Date,
//     updated_at: Date,
//     json: Object
// });