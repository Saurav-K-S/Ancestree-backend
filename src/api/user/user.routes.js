const express = require('express');
const userRouter = express.Router();
const user = require('./user.controllers');
const { auth } = require('../../middlewares');

userRouter.post('/register', user.Register);
userRouter.post('/create', user.CreateUser);
userRouter.post('/login', user.Login);
userRouter.post('/forgot', user.Forgot);
userRouter.post('/changePassword', user.ChangePassword);
userRouter.put('/refUpdate', auth, user.UpdateRef);
userRouter.get('/view', auth, user.View);
module.exports = userRouter;
