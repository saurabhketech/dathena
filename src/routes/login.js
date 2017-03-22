import login from '../controllers/login'

export default (app) => {
    app.route('/user/login').post(login.userLogin);
    return app;
}
