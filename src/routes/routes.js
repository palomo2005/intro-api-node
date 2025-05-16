const express = require('express');
const router = express.Router();

const RotasPalomo = require('./routes-palomo');
const RotasJoao = require('./routes-joao');
const RotasCilas = require('./routes-cilas');
const RotasGustavo = require('./routes-gustavo');

router.use('/', RotasPalomo);
router.use('/', RotasJoao);
router.use('/', RotasCilas);
router.use('/', RotasGustavo);

module.exports = router;