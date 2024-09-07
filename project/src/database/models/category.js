const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new mongoose.Schema({
    content: { type: String, required: true },
}, { timestamps: true });


module.exports = mongoose.model('Category', categorySchema);
   