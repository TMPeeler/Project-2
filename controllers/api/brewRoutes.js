const router = require('express').Router();
const Brew = require('../../models/Brew');
const User = require('../../models/User');
const Review = require('../../models/Review');
const withAuth = require('../../utils/auth');

router.post('/newbrew', withAuth, async (req,res) => {
    try {
        const brewData = await Brew.create(req.body);
        console.log('new beer created');
        res.status(200).json(brewData);
    } catch (err) {
        res.status(400).json(err);
    }
});




router.get('/:id', async (req,res) => {
    try {
        const brewData = await Brew.findOne({where:{id: req.params.id}});
        if(!brewData){
            res.status(404).json({message:"No Beer Found Matching Your Selection"});
        }
        console.log(brewData);
        //res.status(200).json(brewData);
        res.render('brewpage',{
            brew : brewData.dataValues,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;