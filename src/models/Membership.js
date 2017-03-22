export default function(sequelize, DataTypes) {
    const Membership = sequelize.define('Membership', {
        membershiptype: { type: DataTypes.ENUM('GOLD', 'PLATINUM', 'DIAMOND') }
    }, {
        associate: (models) => {
            Membership.belongsTo(models.Profile, { foreignKey: 'id', targetKey: 'membership_id' });
        },
        tableName: 'Membership',
        timestamps: true,
    });
    return Membership
}
