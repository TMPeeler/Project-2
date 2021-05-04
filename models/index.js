const Brew = require('./Brew');
const Review = require('./Review');
const User = require('./User');

Review.belongsTo(Brew,{foreignKey: //add foreign key
})

Review.belongsTo(User,{foreignKey: //add foreign key
})

User.hasMany(Review,{foreignKey: //add foreign key
})

Brew.hasMany(Review,{foreignKey: //add foreign key
})

module.exports = {Brew,User,Review};
