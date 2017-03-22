import express from 'express';
import expressJwt from 'express-jwt';
import jwt from 'jsonwebtoken';
import BaseAPIController from './BaseAPIController';
import loginProvider from '../providers/loginProvider.js';
import db from '../db';

export class loginController extends BaseAPIController {
    userLogin = (req, res) => {
        const login = loginProvider.login(this._db.User, req.body, {...req.body });
        this._db.User.find({ where: { username: login.username, password: login.password } })
            .then(function(user) {
                var token = jwt.sign({ token: user.id }, "secret_key", { expiresIn: 60 * 60 });
                res.json({ status: 1, token: token, messgae: "login sucessfully" })
            })
            .catch(this.handleErrorResponse.bind(null, res));
    }
}
const controller = new loginController();
export default controller;
