export default function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        createdBy: DataTypes.INTEGER,
        updatedBy: DataTypes.INTEGER
    }, {
        associate: (models) => {
            User.belongsTo(models.Profile, { foreignKey: 'id', targetKey: 'user_id' });
        },
        tableName: 'User',
        timestamps: true,
    });
    return User
}
