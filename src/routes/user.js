import { Router } from 'express';
import user from '../controllers/user'

export default () => {
    let api = Router();
    api.route('/user/register').post(user.create);
    return api;
}
