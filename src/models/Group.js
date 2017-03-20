export default function(sequelize, DataTypes) {
    var Group = sequelize.define('Group', {
        groupname: {
            type: DataTypes.ENUM('TME', 'ADMIN', 'OUTLET'),
        }
    }, {
        associate: (models) => {
            Group.hasMany(models.Profile, { foreignKey: 'group_id' });
        },
        tableName: 'Group',
        timestamps: true,
    });
    return Group;
}
