const { Model, DataTypes } = require('sequelize');

class Address extends Model {
    static init(sequelize){
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }   

    //método que irá indicar que tipo de relacionamento Address possui
    static associate(models){

        //belongsTo indica que Address tem um relacionamento de 1:N com user
        this.belongsTo(models.User, {
            foreignKey: 'user_id', //Qual campo a FK referencia
            as: 'owner' //Nome do relacionamento 
        });
    }
}

module.exports = Address;