// collecting and exporting the User model data

const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');

// create associations
// this association creates the reference for the id column in the user model to link to the corresponding foreign key pair
User.hasMany(Post, {
  foreignKey: 'user_id'
});

// reverse association
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'user_id'
});

Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id'
});

Vote.belongsTo(User, {
  foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});

Post.hasMany(Vote, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Vote };