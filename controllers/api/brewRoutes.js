const Brew = require('../../models/Brew');
const User = require('../../models/User');
const Review = require('../../models/Review');
const withAuth = require('../../utils/auth');
const router = require('express').Router();

router.post('/newbrew', withAuth, async (req,res) => {
    try {
        const brewData = await Brew.create(req.body);
        res.status(200).json(brewData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', async (req,res) => {
    try {
        const brewData = await Brew.findByPk(req.params.id)
        if(!brewData){
            res.status(404).json({message:"No Beer Found Matching Your Selection"});
        }
        console.log(brewData);
        res.status(200).json(brewData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;