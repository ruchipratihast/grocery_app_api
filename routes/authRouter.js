const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { registerController } = require('../controllers/authController')
    
var validation = [

    body('email').isEmail(),
    body('password').isLength({ min: 6 })
        .withMessage('Min 6 Characters allowed !')
        .isLength({ max: 12 })
        .withMessage('Max 12 characters allowed !')

]

router.post('/register',validation, registerController);

module.exports = router ;