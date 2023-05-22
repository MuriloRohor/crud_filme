// importando modulos
const Sequelize = require('sequelize');

// criando / conexão com banco de dados
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'filmes.sqlite'
});


// tratando erros
try{
  sequelize.authenticate();
  console.log('Banco de dados conectado!')
}catch(error){
  console.log('Erro ao conectar ao Banco', error);
}

module.exports = sequelize;