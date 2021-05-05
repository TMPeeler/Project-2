const router = require('express').Router();
const Brew = require('../../models/Brew');
const User = require('../../models/User');
const Review = require('../../models/Review');
const withAuth = require('../../utils/auth');

router.post('/newbrew', withAuth, async (req,res) => {
    try {
        const brewData = await Brew.create(req.body);
        res.status(200).json(brewData);
    } catch (err) {
        res.status(400).json(err);
    }
});





module.exports = router