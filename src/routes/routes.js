const express = require('express');
const router = express.Router();

const skinsController = require('../controllers/skins');
const ocorrenciasController = require('../controllers/ocorrencias');

router.get('/skins', skinsController.listarSkins);
router.post('/skins', skinsController.cadastrarSkins);
router.patch('/skins/:skin_id', skinsController.editarSkins);
router.delete('/skins', skinsController.apagarSkins);


// router.get('/ocorrencias', ocorrenciasController.listarOcorrencias);

module.exports = router