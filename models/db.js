const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('User', Schema)

/*const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistemadecadastro', 'root', 'Eeth9lei',{
  host: 'localhost',
  dialect:'mysql'
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}
*/