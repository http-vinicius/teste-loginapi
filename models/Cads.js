const db = require('./db');

const Cad = db.sequelize.define('usuarios',{
  email:{
    type:Sequelize.STRING
  },
  senha:{
    type:Sequelize.STRING
  }
})

Post.sync({force:true})
