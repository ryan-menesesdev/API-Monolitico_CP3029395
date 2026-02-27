const express = require('express');
const { userController } = require('../controllers/user.controller');
const userRoutes = express.Router();

userRoutes.get('/users', userController.getAllUsers);
userRoutes.get('/users/:id', userController.getUserById);
userRoutes.post('/users', userController.createUser);
userRoutes.put('/users/:id', userController.editUserById);
userRoutes.delete('/users/:id', userController.deleteUserById);

module.exports = userRoutes;