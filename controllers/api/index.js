const router = require('express').Router();
const userRoutes = require('./userRoutes');
const brewRoutes = require('./brewRoutes');

router.use('/user',userRoutes);
router.use('/brew',brewRoutes);

module.exports = router;