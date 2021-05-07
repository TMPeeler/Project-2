const Review = require('./Review');
const User = require('./User');

Review.belongsTo(User,{foreignKey: 'user_id'});

module.exports = {User,Review};
