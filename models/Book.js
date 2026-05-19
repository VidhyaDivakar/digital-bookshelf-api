const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    title: { type: String , required: true },
    author: { type: String, required: true },
    isbn: {type: String, unique: true}, /*Must be unique International Standard Book Number (ISBN)*/
    publishedDate: {type: Date},
    inStock: Boolean,
});

const Book= mongoose.model("Book", bookSchema);
module.exports = Book;