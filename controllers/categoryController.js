const Category = require("../models/categoryModel")

const getAllCategory = (req, res) => {
    try {
        Category.find()
            .then((result) => res.status(200).json({ message: result }))
            .catch((err) => {
                return res.status(500).json({ message: 'Error fetching category' });
            })
    }
    catch (err) {
        res.status(500).json({ message: err })
    }
}

const createCategory = async (req, res) => {
    try {
        const { name,image } = req.body;

        if (!name || !image) {
            return res.status(400).json({
                errorMessage: "Bad Request",
            });
        }

        CategoryDetails = new Category({
            // "name": "Technology",
            // "image": "https://example.com/tech1-image.jpg",
            name,
            image
        });

        await CategoryDetails.save();
        return res.status(200).json({ message: "New job created successfully" });

    } catch (error) {
        return res.status(500).json({ message: error });;
    }
}

const editCategory = async (req, res) => {

    try {

        const { name,image } = req.body;

        if (!name || !image) {
            return res.status(400).json({
                errorMessage: "Bad Request",
            });
        }

        const cateId = req.params.categoryId;

        await Category.updateOne(
            { _id: cateId },
            {
                $set: {
                    // "name": "Update Technology",
                    // "image": "https://example.com/tech1-image.jpg",
                    name,
                    image
                }
            }
        );
        return res.status(200).json({ message: "Category updated successfully" });
    }
    catch (err) {
        return res.status(200).json({ message: err })
    }
}

const deleteCategory = async (req, res) => {
    try {
        const cateId = req.params.categoryId;

        const isId = await Category.findByIdAndDelete(cateId);
        if (isId) {
           return res.status(200).json({ message: `User with id ${cateId} successfully deleted` });
        }
        else {
           return res.status(500).json({ message: `UserId Not Found` });
        }

    } catch (error) {
        return res.status(200).json({ message: err })
    }
}

module.exports = {
    getAllCategory,
    createCategory,
    editCategory,
    deleteCategory
}