export default function(sequelize, DataTypes) {
    const Profile = sequelize.define('Profile', {
        user_id: DataTypes.INTEGER,
        group_id: DataTypes.INTEGER,
        bat_id: DataTypes.INTEGER,
        membership_id: DataTypes.INTEGER,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        dob: DataTypes.DATE,
        outlet_id: DataTypes.INTEGER,
        tme_id: DataTypes.INTEGER,
    });
    return Profile
}
