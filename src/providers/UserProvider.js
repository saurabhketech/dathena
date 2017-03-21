import crypto from 'crypto';
import * as BaseProvider from './BaseProvider';

/**
 *
 */
const create = (model, user, body) => {
    let password = crypto.createHash('md5').update(body.password).digest('hex');
    // let password = body.password;
    return {...user, ...body, ... { password } };
};

export default {
    ...BaseProvider,
    create
};
