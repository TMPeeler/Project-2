const router = require('express').Router();
const Brew = require('../../models/Brew');
const User = require('../../models/User');
const Review = require('../../models/Review');
const withAuth = require('../../utils/auth');

router.post('/newrev', async (req,res) => {
    const goodparams = {...req.body,user_id: req.session.user_id}
    try {
        const reviewData = await Review.create(goodparams);
        console.log('Review Created!');
        res.status(200).json(reviewData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;