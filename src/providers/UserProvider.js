import crypto from 'crypto';
import * as BaseProvider from './BaseProvider';

/**
 *
 */
const create = (model, user, body) => {
    console.log(model)
    let password = crypto.createHash('md5').update(body.password).digest('hex');
    return {...user, ...body, ... { password } };
};

export default {
    ...BaseProvider,
    create
};
