const router = require('express').Router();
const userRoutes = require('./userRoutes');
const brewRoutes = require('./brewRoutes');
const reviewRoutes = require('./reviewRoutes');

router.use('/user',userRoutes);
router.use('/brew',brewRoutes);
router.use('/review',reviewRoutes);

module.exports = router;