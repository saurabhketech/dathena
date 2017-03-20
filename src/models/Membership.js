export default function(sequelize, DataTypes) {
    var Membership = sequelize.define('Membership', {
        membershiptype: {
            type: DataTypes.ENUM('GOLD', 'PLATINUM', 'DIAMOND'),
        },
        createdBy: DataTypes.INTEGER,
        updatedBy: DataTypes.INTEGER
    }, {
        associate: (models) => {
            Membership.hasMany(models.Profile, { foreignKey: 'membership_id' });
        },
        tableName: 'Membership',
        timestamps: true,
    });
    return Membership
}
