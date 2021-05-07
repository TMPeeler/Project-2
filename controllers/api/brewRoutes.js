const router = require('express').Router();
const Brew = require('../../models/Brew');
const {User} = require('../../models');
const Review = require('../../models/Review');
const withAuth = require('../../utils/auth');

router.post('/newbrew', async (req,res) => {
    try {
        console.log("----")
        const brewData = await Brew.create(req.body);
        console.log('new beer created');
        res.status(200).json(brewData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});



router.get('/:id', async (req,res) => {
    try {
        const brewData = await Brew.findOne({where:{id: req.params.id}});
        const reviewData = await Review.findAll(
            {
                where: {
                    brew_id: req.params.id
                },
                include: [
                   {model: User}
                ],
        });
        const reviews = reviewData.map((review)=> review.get({plain: true}));
        console.log(reviews);
        if(!brewData){
            res.status(404).json({message:"No Beer Found Matching Your Selection"});
        }
        //console.log(brewData);
        //console.log(reviewData);
        //res.status(200).json(brewData);
        res.render('brewpage',{
            brew : brewData.dataValues,
            review: reviews,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;