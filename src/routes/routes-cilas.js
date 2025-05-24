const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuarios');
const avaliacoesController = require('../controllers/avaliacoes');


//usuarios
router.get('/usuarios', usuariosController.listarUsuarios);
router.post('/usuarios', usuariosController.cadastrarUsuarios);
router.patch('/usuarios', usuariosController.editarUsuarios);
router.delete('/usuarios', usuariosController.apagarUsuarios);

//avaliacoes
router.get('/avaliacoes', avaliacoesController.listarAvaliacoes);
router.post('/avaliacoes', avaliacoesController.cadastrarAvaliacoes);
router.patch('/avaliacoes', avaliacoesController.editarAvaliacoes);
router.delete('/avaliacoes', avaliacoesController.apagarAvaliacoes);


module.exports = router;