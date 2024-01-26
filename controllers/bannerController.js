const Banner = require('../models/bannerModel');

const getAllBanner = async (req, res) => {
    try {
        const banners = await Banner.find();
        res.json(banners);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching banners' });
    }
}

const getBannerById = async (req, res) => {
    try {
        const banner = await Banner.findById(req.params.id);
        if (!banner) {
            return res.status(404).json({ message: 'Banner not found' });
        }
        res.json(banner);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching banner' });
    }
}

const createBanner = async (req, res) => {
    const newBanner = new Banner(req.body);

    try {
        const savedBanner = await newBanner.save();
        res.status(201).json(savedBanner);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Error creating banner' });
    }
}

const updateBanner = async (req, res) => {
    try {
        const updatedBanner = await Banner.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBanner) {
            return res.status(404).json({ message: 'Banner not found' });
        }
        res.json(updatedBanner);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Error updating banner' });
    }
}

const deleteBanner = async (req, res) => {
    try {
        const deletedBanner = await Banner.findByIdAndDelete(req.params.id);
        if (!deletedBanner) {
            return res.status(404).json({ message: 'Banner not found' });
        }
        res.json({ message: 'Banner deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting banner' });
    }
}

module.exports = {
    getAllBanner,
    getBannerById,
    createBanner,
    updateBanner,
    deleteBanner
}