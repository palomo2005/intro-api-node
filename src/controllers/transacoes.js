const db = require('../database/connection');

module.exports = {
    async listarTransacoes(request, response) {
        try {
             const sql = 'SELECT trans_id, usu_id, skin_id, trans_valor, trans_status, trans_data FROM transacoes;'

            const [rows] = await db.query(sql);

            return response.status(200).json({
                sucess: true,
                message: 'lista de transacoes',
                itens: rows.length,
                dados: rows
            });
        } catch (error) {
            return response.status(200).json({
                sucess: false,
                message: 'Erro ao listar transacoes',
                dados: error.message
            });
        }
    },
    async cadastrarTransacoes(request, response) {
        try {
            const { usu_id, skin_id, trans_valor, trans_status, trans_data}= request.body;
             

            // introdução SQL
            const sql = 
           ` INSERT INTO transacoes 
                (usu_id, skin_id, trans_valor, trans_status, trans_data)
            VALUES 
                (?, ?, ?, ?, ?);

            `;

            //definição dos dados a serem inseridos em um array 
            const values = [ usu_id, skin_id, trans_valor, trans_status, trans_data];

            //execução da intrução sql passando os parametros
            const [result] = await db.query(sql, values);

            //identificação do id do registro inserido
            const dados = {
                id: result.insertId,
                trans_valor,
                trans_data,
                
            };





            return response.status(200).json({
                sucess: true,
                message: 'cadastro de transacoes',
                dados 
            });
        } catch (error) {
            return response.status(200).json({
                sucess: false,
                message: 'Erro ao listar transacoes',
                dados: error.message
            });
        }
    },
      async editarTransacoes(request, response) {
        try {
            return response.status(200).json({
                sucess: true,
                message: 'atualização de transacoes',
                dados: null
            });
        } catch (error) {
            return response.status(200).json({
                sucess: false,
                message: 'Erro ao listar transacoes',
                dados: error.message
            });
        }
    }, 
      async apagarTransacoes(request, response) {
        try {
            return response.status(200).json({
                sucess: true,
                message: 'apagar transacoes',
                dados: null
            });
        } catch (error) {
            return response.status(200).json({
                sucess: false,
                message: 'Erro ao listar transacoes',
                dados: error.message
            });
        }
    }
 
}