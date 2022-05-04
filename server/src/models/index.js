const User = require("./User");
const Comment = require("./Comment");
const Like = require("./Like");
const Post = require("./Post");

async function inicializeModels() {
    await User.sync();
    await Comment.sync();
    await Like.sync();
    await Post.sync();
    console.log("Models are connected");
}

module.exports = inicializeModels;