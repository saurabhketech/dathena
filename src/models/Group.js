export default function(sequelize, DataTypes) {
    var Group = sequelize.define('Group', {
        groupname: {
            type: DataTypes.ENUM('TME', 'ADMIN', 'OUTLET'),
        },
        createdBy: DataTypes.INTEGER,
        updatedBy: DataTypes.INTEGER
    }, {
        associate: (models) => {
            Group.belongsTo(models.Profile, { foreignKey: 'id', targetKey: 'group_id' });
        },
        tableName: 'Group',
        timestamps: true,
    });
    return Group;
}
