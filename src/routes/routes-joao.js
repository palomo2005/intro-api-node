const express = require('express');
const router = express.Router();

const transacoesController = require('../controllers/transacoes');


router.get('/transacoes', transacoesController.listarTransacoes);
router.post('/transacoes', transacoesController.cadastrarTransacoes);
router.patch('/transacoes/:id', transacoesController.editarTransacoes);
router.delete('/transacoes/:id', transacoesController.apagarTransacoes);


module.exports = router