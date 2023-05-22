// importando bibliotecas / modulos
const database = require('./db/db');
const express = require('express');
const hand = require('express-handlebars');
const Filme = require('./models/Filme');
const FilmeRoutes = require('./routes/routesFilme');
const app = express();

// controllers
const FilmeControllers = require('./controllers/controllerFilme');
app.engine('handlebars', hand.engine());
app.set('view engine', 'handlebars');
app.use(express.urlencoded({extended: true}));

app.use(express.json());
app.use(express.static('public'));

// rotas
app.use('/', FilmeRoutes);


// sicronismo banco de dados
try{
  database.sync().then(()=>{
    app.listen(9443,()=>{console.log('Servidor Rodando!')});
  });
}catch(error){
  console.log('Falha ao sicronizar banco de dados!', error);
}