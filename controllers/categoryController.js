const Category = require("../models/categoryModel")

const getAllCategory = ((re, res) => {
    try {
        Category.find()
            .then((result) => res.json({ message: result }))
            .catch((err) => console.log(err))
    }
    catch (err) {
        res.json({ message: err })
    }
})

const createCategory = async (req, res) => {
    try {
        // const { name,image } = req.body;

        // if (!name || !image) {
        //     return res.status(400).json({
        //         errorMessage: "Bad Request",
        //     });
        // }

        CategoryDetails = new Category({
            "name": "Technology",
            "image": "https://example.com/tech1-image.jpg",
        });

        await CategoryDetails.save();

        res.json({ message: "New job created successfully" });
    } catch (error) {
        console.log(error);
    }
}

const editCategory = async (req, res) => {
    try {

        const cateId = req.params.categoryId;

        await Category.updateOne(
            { _id: cateId },
            {
                $set: {
                    "name": "Update Technology",
                    "image": "https://example.com/tech1-image.jpg",
                }
            }
        );
        res.json({ message: "Category updated successfully" });
    }
    catch (err) {
        res.json({ message: err })
    }
}

const deleteCategory = async (req, res) => {
    try {
        const cateId = req.params.categoryId;

        const isId = await Category.findByIdAndDelete(cateId);
        if (isId) {
            res.status(200).json({ message: `User with id ${cateId} successfully deleted` });
        }
        else {
            res.status(500).json({ message: `UserId Not Found` });
        }

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllCategory,
    createCategory,
    editCategory,
    deleteCategory
}