const Banner = require('../models/bannerModel');

const getAllBanner = async (req, res) => {
    try {
          await Banner.find()
        .then((result)=>{
          return res.status(200).json(result);
        })
        .catch((err)=>{
            return res.status(500).json({ message: 'Error fetching banners' });
        })

    } catch (err) {
        return res.status(500).json({ message: 'Error fetching banners' });
    }
}

const createBanner = async (req, res) => {

    const newBanner = new Banner(req.body);

    try {
        await newBanner.save();
        return res.status(200).json({ message: "Banner created successfully" });
    } catch (err) {
        return res.status(400).json({ message: 'Error creating banner' });
    }
}

const updateBanner = async (req, res) => {
    try {  
        const updatedBanner = await Banner.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBanner) {
            return res.status(404).json({ message: 'Banner not found' });
        }
        return res.status(200).json({ message: "Banner updated successfully" });

    } catch (err) {
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
        res.status(500).json({ message: 'Error deleting banner' });
    }
}

module.exports = {
    getAllBanner,
    createBanner,
    updateBanner,
    deleteBanner
}