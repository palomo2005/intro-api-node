const db = require('../database/connection')

module.exports = {
    async listarSkins(request, response) {
        try {

            const sql = 'SELECT skin_id, usu_id, skin_nome, skin_cond, skin_preco, skin_data, skin_status, skin_float FROM skins;';

            const [rows] = await db.query(sql);

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de skins.',
                itens: rows.length,
                dados: rows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição',
                dados: error.menssage
            });
        }
    },
    async cadastrarSkins(request, response) {
        try {
            const {usu_id, skin_nome, skin_cond, skin_preco, skin_data, skin_status, skin_float} = request.body;

            const sql = `
                INSERT INTO skins 
                    (usu_id, skin_nome, skin_cond, skin_preco, skin_data, skin_status, skin_float)
                VALUES
                    (?, ?, ?, ?, ?, ?, ?);
                `;

                const values = [usu_id, skin_nome, skin_cond, skin_preco, skin_data, skin_status, skin_float];

                const [result] = await db.query(sql, values);

                const dados = {
                    id: result.insertId,
                    skin_nome,
                    skin_data
                }

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Cadastro de skins.',
                dados
            });
            
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição',
                dados: error.menssage
            });
        }
    },

    async editarSkins(request, response) {
        try {

            const {skin_nome, skin_cond, skin_preco, skin_data, skin_status, skin_float} = request.body;

            const {skin_id} = request.params

            const sql = `
                UPDATE skins 
                    SET skin_nome = ?, skin_cond = ?, skin_preco = ?, skin_data = ?, skin_status = ?, skin_float = ?
                WHERE skin_id = ?;
                `;
            
            const values = [skin_nome, skin_cond, skin_preco, skin_data, skin_status, skin_float, skin_id];

            const atualizaDados = await db.query(sql, values);
            
            return response.status(200).json({
                sucesso: true,
                mensagem: `Skins ${skin_id} atualizado com sucesso!`,
                dados: atualizaDados[0].affectedRows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição',
                dados: error.menssage
            });
        }
    },
    async apagarSkins(request, response) {
        try {
            // parâmentro passado via url na chamada da api pelo front-end
            const { id } = request.params;
            // comando de exclusão
            const sql = `DELETE FROM skins WHERE skin_id = ?`;
            // array com parâmetros da exclusão
            const values = [id];
            // executa instrução no banco de dados
            const [result] = await db.query(sql, values);

            if (result.affectedRows === 0) {
                return response.status(404).json({
                    sucesso: false,
                    mensagem: `Skin ${skin_id} não encontrado!`
                });
            }

            return response.status(200).json({
                sucesso: true,
                mensagem: `Skin ${id} excluído com sucesso`,
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição',
                dados: error.menssage
            });
        }
    }
}

