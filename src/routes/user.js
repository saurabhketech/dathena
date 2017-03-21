import user from '../controllers/user';

export default function(app) {
    app.route('/user/register')
        .post(user.create);

}
