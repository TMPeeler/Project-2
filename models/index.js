const Review = require('./Review');
const User = require('./User');
//const Brew = require('./Brew');


// Review.hasOne(User,{foreignKey: 'user_id'});
User.hasMany(Review,{foreignKey: 'user_id'});
Review.belongsTo(User,{foreignKey: 'user_id'});
// Brew.hasMany(Review,{foreignKey: 'brew_id'});
// Review.belongsTo(Brew,{foreignKey: 'brew_id'});

module.exports = {User,Review};
