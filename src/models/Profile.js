export default function(sequelize, DataTypes) {
    var Profile = sequelize.define('Profile', {
        user_id: DataTypes.STRING,
        group_id: DataTypes.STRING,
        bat_id: DataTypes.STRING,
        membership_id: DataTypes.STRING,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        dob: DataTypes.DATE,
        outlet_id: DataTypes.STRING,
        tme_id: DataTypes.STRING
    }, {
        associate: (models) => {
            Profile.belongsTo(models.Group, { foreignKey: 'group_id', targetKey: 'id' });
        },
        tableName: 'Profile',
        timestamps: true,
    });

    return Profile
}
