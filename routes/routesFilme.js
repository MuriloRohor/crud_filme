const express = require('express');
const ControllerFilme = require('../controllers/controllerFilme');
const router = express.Router();

// rota listagem filmes
router.get('/', ControllerFilme.ListarFilme);

// rota cadastro filmes
router.get('/cadastrar', ControllerFilme.CadastrarFilme);
router.post('/cadastrar', ControllerFilme.FilmeCreate);

// rota update filmes
router.get('/update/:id_filme', ControllerFilme.UpdateFilme);
router.post('/update', ControllerFilme.FilmeUpdate);

//rota deletar filmes
router.post('/remover', ControllerFilme.DeleteFilme);

module.exports = router;