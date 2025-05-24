
const db = require('../database/connection');

module.exports = {
    async listarOcorrencias(request, response) {
        try {
            const sql = 'SELECT oco_id, trans_id, oco_valor, oco_situacao, oco_data FROM ocorrencias;'
            
            const [rows] = await db.query(sql);

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de ocorrencias.',
                itens: rows.length,
                dados: rows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na ocorrencia.',
                erro: error.mensagem
            });
        }
    },
    async cadastrarOcorrencias(request, response) {
        try {
            const {trans_id, oco_valor, oco_situacao, oco_data} = request.body;

            //instrução SQL
            const sql = `
            INSERT INTO ocorrencias
                (trans_id, oco_valor, oco_situacao, oco_data)
            VALUES
                (?, ?, ?, ?);
            `;

            //definição dos dadosa serem inseridos em um array
            const values = [trans_id, oco_valor, oco_situacao, oco_data];

            //execução da instrução sql passando os parâmetros
            const [result] = await db.query(sql, values);
            
            //identificação do ID do registro inserido
            const dados = {
            id: result.insertId,
            oco_valor,
            oco_data,
            };
            return response.status(200).json({
                sucesso: true,
                mensagem: 'cadastro de ocorrencias.',
                dados: dados
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na ocorrencia.',
                erro: error.mensagem
            });
        }
    },
    async editarOcorrencias(request, response) {
        try {
            // pârametro recebido pelo corpo da requisição
            const { oco_valor, oco_situacao, oco_data } = request.body;
            //pârametro recebido pela URL via params ex: /
            const { oco_id } = request.params;
            //insruções SQL
            const sql = `UPDATE ocorrencias SET oco_valor = ?,
             oco_situacao = ?, oco_data = ?
             WHERE oco_id = ?;`;
            // preparo do array com dados que serão atualizados
            const values = [oco_valor, oco_situacao, oco_data, oco_id]
            // execução e obtenção de confirmação da atualização realizada
            const atualizaDados = await db.query(sql, values);

 
            return response.status(200).json({
                sucesso: true,
                mensagem: `ocorrencias ${oco_id} atualizado com sucesso!`,
                dados: atualizaDados[0].affectedRows
                // mensSql: atualizaDados
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na ocorrencia.',
                dados: error.mensagem
            });
        }
    
    },
    async apagarOcorrencias(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de ocorrencias.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na ocorrencia.',
                erro: error.mensagem
            });
        }
    },
}