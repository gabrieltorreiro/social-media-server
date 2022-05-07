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

    // Associations
    Post.belongsTo(User);
    Like.belongsTo(Post);
    Like.belongsTo(User);
    Comment.belongsTo(Post);
    Comment.belongsTo(User);
}

module.exports = inicializeModels;