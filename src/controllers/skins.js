const dp = require('../database/connection')

module.exports = {
    async listarSkins(request, response) {
        try {
            return response.status(200).json ({
                sucesso: true,
                mensagem: 'Lista de skins.',
                dados: null
            });
        }catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição',
                dados: error.menssage
            });
        }
    }
},

module.exports = {
    async cadastrarSkins(request, response) {
        try {
            return response.status(200).json ({
                sucesso: true,
                mensagem: 'Lista de skins.',
                dados: null
            });
        }catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição',
                dados: error.menssage
            });
        }
    }
},

module.exports = {
    async editarSkins(request, response) {
        try {
            return response.status(200).json ({
                sucesso: true,
                mensagem: 'Lista de skins.',
                dados: null
            });
        }catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição',
                dados: error.menssage
            });
        }
    }
},

module.exports = {
    async apagarSkins(request, response) {
        try {
            return response.status(200).json ({
                sucesso: true,
                mensagem: 'Lista de skins.',
                dados: null
            });
        }catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição',
                dados: error.menssage
            });
        }
    }
}