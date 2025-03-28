const express = require('express');
const router = express.Router();

const skinsController = require('../controllers/skins');
const ocorrenciasController = require('../controllers/ocorrencias');

router.get('/skins', skinsController.listarSkins);
router.get('/ocorrencias', ocorrenciasController.listarOcorrencias);

module.exports = router