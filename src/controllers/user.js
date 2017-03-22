import express from 'express';
import BaseAPIController from './BaseAPIController';
import UserProvider from '../providers/UserProvider.js';
import db from '../db';

export class userController extends BaseAPIController {
    create = (req, res) => {
        const user = UserProvider.create(this._db.User, req.body, {...req.body });
        this._db.User.find({ where: { username: user.username } })
            .then(UserProvider.throwIfExists.bind(null, 'Username is already in use.'))
            .then(() => this._db.User.create(user))
            .then(() => this._db.User.find({ where: { username: user.username } }))
            .then(res.json.bind(res))
            .catch(this.handleErrorResponse.bind(null, res));
    }
}
const controller = new userController();
export default controller;
