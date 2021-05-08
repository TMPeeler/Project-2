const Review = require('./Review');
const User = require('./User');

User.hasMany(Review,{foreignKey: 'user_id'});
Review.belongsTo(User,{foreignKey: 'user_id'});


module.exports = {User,Review};
