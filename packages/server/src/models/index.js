const User = require("./User");
const Comment = require("./Comment");
const Like = require("./Like");
const Post = require("./Post");

async function inicializeModels () {
    await User.sync();
    await Comment.sync();
    await Like.sync();
    await Post.sync();
    console.log("Models are connected");

    // Associations
    Post.belongsTo(User);
    Post.hasMany(Like);
    Like.belongsTo(Post);
    User.hasMany(Like);
    Like.belongsTo(User);
    Post.hasMany(Comment);
    Comment.belongsTo(Post);
    User.hasMany(Comment);
    Comment.belongsTo(User);
}

module.exports = inicializeModels;
