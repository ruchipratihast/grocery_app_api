const express = require('express');
const router = express.Router();

const { getAllBanner, getBannerById, createBanner, updateBanner, deleteBanner } = require('../controllers/bannerController');

// GET all banners
router.get('/all', getAllBanner);

// GET a specific banner by ID
router.get('/all/:id', getBannerById);

// POST a new banner
router.post('/create', createBanner);

// PUT (update) an existing banner
router.put('/edit/:id', updateBanner);

// DELETE a banner
router.delete('/delete/:id', deleteBanner);

module.exports = router;