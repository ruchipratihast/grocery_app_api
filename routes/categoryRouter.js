const express = require('express');
const router = express.Router();

const { getAllCategory, createCategory, editCategory, deleteCategory } = require('../controllers/categoryController')

router.get('/all',getAllCategory);

router.post('/create',createCategory);

router.put('/edit/:categoryId',editCategory);

router.delete('/delete/:categoryId',deleteCategory);

module.exports = router;