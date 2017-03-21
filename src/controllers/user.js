import BaseAPIController from './BaseAPIController';
import UserProvider from '../providers/UserProvider';

export class UserController extends BaseAPIController {
    /**
     * @method create
     * @param {Request} req
     * @param {Response} res
     */
    create = (req, res) => {
        console.log(req.body);
        // const user = UserProvider.create(this._db.User, req.profile, {...req.body });

        // this._db.User.find({ where: { email: user.email } })
        //     .then(UserProvider.throwIfExists.bind(null, 'Email address is already in use.'))
        //     .then(() => this._db.User.find({ where: { username: user.username } }))
        //     .then(UserProvider.throwIfExists.bind(null, 'Username is already in use.'))
        //     .then(() => this._db.User.create(user))
        //     .then((newUser) => UserProvider.createGroup(this._db.User, req.profile, newUser))
        //     .then((group) => this._db.Group.create(group))
        //     .then((newGroup) => UserProvider.createGroupMember(this._db.User, req.profile, newGroup))
        //     .then((groupMember) => this._db.GroupMember.create(groupMember))
        //     .then(() => this._db.User.find({ where: { email: user.email } }))
        //     .then(res.json.bind(res))
        //     .catch(this.handleErrorResponse.bind(null, res));



        // db.sync().then(function() {
        //         return db.create({ user_id: docs.user_id, address: docs.address, city: docs.city, state: docs.state, pin_code: docs.pin_code, phone_no: docs.phone_no, })
        //     }).then(function(data) {
        //         if (data) {
        //             res.json({ status: 1, message: "Address inserted successfully" });
        //             next();
        //         }
        //     })
        //     return true;


    }
}

const controller = new UserController();
export default controller;
