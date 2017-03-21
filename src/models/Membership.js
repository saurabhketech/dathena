export default function(sequelize, DataTypes) {
    var Membership = sequelize.define('Membership', {
        memebership_id: DataTypes.INTEGER,
        membershiptype: {
            type: DataTypes.ENUM('GOLD', 'PLATINUM', 'DIAMOND'),
        }
    });
    return Membership
}
