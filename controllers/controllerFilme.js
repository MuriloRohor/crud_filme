const Filme = require('../models/Filme');

module.exports = class FilmeController {

  static CadastrarFilme(req, res) {
    res.render('filme/cadastrar')
  }

  // create
  static async FilmeCreate(req, res){
    const filme = {
      titulo: req.body.titulo,
      categoria: req.body.categoria,
      genero: req.body.genero,
      link: req.body.link
    }
    await Filme.create(filme);
    console.log('Cadastro efetuado!')
    res.redirect('/');
  }

  // read
  static async ListarFilme(req, res){
    const filme = await Filme.findAll({raw:true});
    res.render('filme/listar', {filme});
  }

  // update
  static async UpdateFilme(req, res){
    const id_filme = req.params.id_filme;
    const filme = await Filme.findOne({where: {id_filme: id_filme}, raw:true})
    res.render('filme/update', {filme});
  }
  static async FilmeUpdate(req, res){
    const id_filme = req.body.id_filme;
    const filme = {
      titulo: req.body.titulo,
      categoria: req.body.categoria,
      genero: req.body.genero,
      link: req.body.link
    }
    await Filme.update(filme, {where: {id_filme:id_filme}})
    res.redirect('/')
  }

  // delete
  static async DeleteFilme(req,res){
    const id_filme = req.body.id_filme;
    await Filme.destroy({where:{id_filme: id_filme}})
    
    res.redirect('/')
  }
}
