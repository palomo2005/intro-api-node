const db = require('../database/connection');


module.exports = {
    async listarAvaliacoes(request, response) {
        try {
            const sql = 'SELECT av_id, usu_id, av_nota, av_comentario, av_moderacao FROM avaliacoes;';

            const [rows] = await db.query(sql);

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de avaliacoes',
                itens: rows.length,    
                dados: rows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
    async cadastrarAvaliacoes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Cadastrar avaliacoes',    
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
    async editarAvaliacoes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Editar avaliacoes',    
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
    async apagarAvaliacoes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Apagar avaliacoes',    
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
}