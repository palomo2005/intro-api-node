const express = require('express');
const router = express.Router();

const OcorrenciasController = require('../controllers/ocorrencias');

router.get('/ocorrencias', OcorrenciasController.listarOcorrencias);
router.post('/ocorrencias', OcorrenciasController.cadastrarOcorrencias);
router.patch('/ocorrencias/:oco_id', OcorrenciasController.editarOcorrencias);
router.delete('/ocorrencias', OcorrenciasController.apagarOcorrencias);

module.exports = router;