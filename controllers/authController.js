const User = require('../models/authModel')
const { validationResult } = require('express-validator');

const registerController = async (req,res) =>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const newUser = new User(req.body);

    try {
      await newUser.save();
      return res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Registration failed' });
    }

}

module.exports = {
    registerController,
}