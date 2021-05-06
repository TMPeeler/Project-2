const sequelize = require('../config/connection');

const Brew = require('../models/Brew');
const User = require('../models/User');
const Review = require('../models/Review');


const userData = require('./userData.json');
const reviewData = require('./reviewData.json');
const brewData = require('./brewData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    await Brew.bulkCreate(brewData, {
        returning: true,
    });
    await Review.bulkCreate(reviewData, {
        returning: true,
    });
    console.log("------");
    process.exit(0);
};
seedDatabase();