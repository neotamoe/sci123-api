var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
    dateCreated: {type: Date, default: Date.now},
    chapter: Number,
    source: String,
    page: Number,
    question: String,
    a: String,
    b: String,
    c: String,
    d: String,
    answer: String,
    tags: Array,
  });

var Question = module.exports = mongoose.model('question', questionSchema);

module.exports.get = function (callback, limit) {
    Question.find(callback).limit(limit);
}
