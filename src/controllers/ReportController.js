const User = require('../models/User');
const {Op} = require('sequelize');

module.exports = {
    async show(req, res){

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.like]: '%@rocketseat.com'
                }
            },
            include: [
                { 
                    association: 'addresses',
                    where: { street: 'Rua Guilherme Gembala'}
                },
                {
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.like]: 'React%'
                        }
                    }
                },
            ]
        })

        return res.json(users);
    }
}