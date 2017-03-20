export default function(sequelize, DataTypes) {
    var Profile = sequelize.define('Profile', {
        user_id: DataTypes.INTEGER,
        group_id: DataTypes.INTEGER,
        bat_id: DataTypes.INTEGER,
        membership_id: DataTypes.INTEGER,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        dob: DataTypes.DATE,
        outlet_id: DataTypes.INTEGER,
        tme_id: DataTypes.INTEGER
    }, {
        associate: (models) => {
            Profile.belongsTo(models.User, { foreignKey: 'user_id' });
            Profile.belongsTo(models.Group, { foreignKey: 'group_id' });
            // Profile.belongsTo(model.bat, { foreignKey: 'bat_id' });
            Profile.belongsTo(models.Membership, { foreignKey: 'membership_id' });
            // Profile.belongsTo(model.Outlet, { foreignKey: 'outlet_id' });
            // Profile.belongsTo(model.Tme, { foreignKey: 'tme_id' });

        },
        tableName: 'Profile',
        timestamps: true,
    });

    return Profile
}
