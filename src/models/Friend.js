const { Model, DataTypes } = require('sequelize')

class Friend extends Model {
    static init(sequelize) {
        super.init({
            name : DataTypes.STRING,
            email : DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.User, { foreignKey : 'friend_id', through : 'user_friends', as : 'users'})
    }
}

module.exports = Friend