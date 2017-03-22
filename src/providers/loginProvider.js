import crypto from 'crypto';
import * as BaseProvider from './BaseProvider';

const login = (model, user, body) => {
    let password = crypto.createHash('md5').update(body.password).digest('hex');
    return {...user, ...body, ... { password } };
};

export default {
    ...BaseProvider,
    login
};
