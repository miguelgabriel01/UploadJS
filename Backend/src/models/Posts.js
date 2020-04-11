const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    name: String,
    size: String,
    key: String,
    url: String,

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Post", PostSchema);