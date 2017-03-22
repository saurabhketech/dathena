export default function(sequelize, DataTypes) {
    const Group = sequelize.define('Group', {
        groupname: { type: DataTypes.ENUM('TME', 'ADMIN', 'OUTLET') },
    }, {
        associate: (models) => {
            Group.belongsTo(models.Profile, { foreignKey: 'id', targetKey: 'group_id' });
        },
        tableName: 'Group',
        timestamps: true,
    });
    return Group;
}
