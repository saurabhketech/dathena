export default function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        username: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        associate: (models) => {
            User.hasMany(models.Profile, { foreignKey: 'user_id' });
        },
        tableName: 'User',
        timestamps: true,
    });
    return User
}
