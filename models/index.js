const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

User.hasMany(Post, {
  fore
})

module.exports = {
  User,
  Comment,
  Post
};