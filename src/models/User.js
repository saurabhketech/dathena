export default function(sequelize, DataTypes) {
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
    }, {
        associate: (models) => {
            User.belongsTo(models.Profile, { foreignKey: 'id', targetKey: 'user_id' });
            User.belongsTo(models.Profile, { foreignKey: 'id', targetKey: 'tme_id' });
        },
        tableName: 'User',
        timestamps: true,
    });
    return User
}
