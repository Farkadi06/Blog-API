const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    desc: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true
    },
    categories: {
        type: Array
    },
},
{timestamps: true}
);

module.exports = mongoose.model("Post",PostSchema);