import user from '../controllers/user'

export default (app) => {
    app.route('/user/register').post(user.create);
    return app;
}
