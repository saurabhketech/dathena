export default function(sequelize, DataTypes) {
    var Group = sequelize.define('Group', {
        group_id: DataTypes.INTEGER,
        groupname: {
            type: DataTypes.ENUM('TME', 'ADMIN', 'OUTLET'),
        }
    });
    return Group;
}
