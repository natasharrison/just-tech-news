// collecting and exporting the User model data

const User = require('./User');
const Post = require('./Post');

// create associations
// this association creates the reference for the id column in the user model to link to the corresponding foreign key pair
User.hasMany(Post, {
  foreignKey: 'user_id'
});

// reverse association
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Post };