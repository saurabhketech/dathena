export default function(sequelize, DataTypes) {
    var Membership = sequelize.define('Membership', {
        membershiptype: {
            type: DataTypes.ENUM('GOLD', 'PLATINUM', 'DIAMOND'),
        },
        createdBy: DataTypes.INTEGER,
        updatedBy: DataTypes.INTEGER
    }, {
        associate: (models) => {
            Membership.belongsTo(models.Profile, { foreignKey: 'id', targetKey: 'membership_id' });
        },
        tableName: 'Membership',
        timestamps: true,
    });
    return Membership
}
