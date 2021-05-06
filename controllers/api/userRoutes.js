const router = require('express').Router();
const User = require('../../models/User');

router.post('/', async (req,res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req,res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData){
            res.status(400).json({message:'Incorrect Email or Password, please try again'});
            return;
        }

        const validPass = await userData.checkPassword(req.body.password);

        if (!validPass){
            res.status(400).json({message:'Incorrect Email or Password, please try again'});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            
            res.json({ user: userData, message: 'You Are Now Logged In!'});
        });

        console.log('hi marko');
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req,res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;