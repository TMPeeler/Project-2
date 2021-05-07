const router = require('express').Router();
//const User = require('../models/User');
const Brew = require('../models/Brew');

router.get('/', async (req,res)=>{
    try {
        const brewData = await Brew.findAll({});
        const brews = brewData.map((brew)=> brew.get({plain: true}));
        console.log(brews);
        //res.status(200).json(brews);
        res.render('homepage',{
            brew: brews,
            logged_in: req.session.logged_in,

        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req,res)=>{
    res.render('login');
});

module.exports = router;