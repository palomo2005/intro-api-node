const dp = require('../database/connection')

module.exports = {
    async listarOcorrencias(request, response) {
        try {
            return response.status(200).json ({
                sucesso: true,
                mensagem: 'Lista de Ocorrencias.',
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

module.exports = {
    async listarOcorrencias(request, response) {
        try {
            return response.status(200).json ({
                sucesso: true,
                mensagem: 'Lista de Ocorrencias.',
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

module.exports = {
    async listarOcorrencias(request, response) {
        try {
            return response.status(200).json ({
                sucesso: true,
                mensagem: 'Lista de Ocorrencias.',
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

module.exports = {
    async listarOcorrencias(request, response) {
        try {
            return response.status(200).json ({
                sucesso: true,
                mensagem: 'Lista de Ocorrencias.',
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
