const db = require('../database/connection');


module.exports = {
    async listarUsuarios(request, response) {
        try {

            const sql = 'SELECT usu_id, usu_nome, usu_email, usu_senha, usu_steamid, usu_saldo, usu_pix, usu_cpf, usu_adm FROM usuarios;';
            
            const [rows] = await db.query(sql);

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de usuários',    
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
    async cadastrarUsuarios(request, response) {
        try {

            const {nome, email, senha, steamid, saldo, pix, cpf, adm} = request.body;
        
            //instrução SQL
            const sql = `INSERT INTO usuarios (usu_nome, usu_email, usu_senha, usu_steamid, usu_saldo, usu_pix, usu_cpf, usu_adm)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?);
             `;

             //definição dos dados a serem inseridos em um array
                const values = [nome, email, senha, steamid, saldo, pix, cpf, adm];

             //execução da instrução SQL passando os parametros
                const [result] = await db.query(sql, values);

             //indentificação do id do registro inserido
                const dados = {
                    id: result.insertId,
                    nome,
                    email,
            
                };


            return response.status(200).json({
                sucesso: true,
                mensagem: 'Cadastrar usuários',    
                dados: dados
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
    async editarUsuarios(request, response) {
        try {
            //parametros recebidos pelo corpo da requisição
            const {nome, email, senha, steamid, saldo, pix, cpf, adm} = request.body;

            //parametro recebido pela url params exemplo: /usuarios/1
            const {usu_id} = request.params;

            //instrução SQL
            const sql = `UPDATE usuarios SET usu_nome = ?, usu_email = ?,
             usu_senha = ?, usu_steamid = ?, usu_saldo = ?, usu_pix = ?, usu_cpf = ?, 
             usu_adm = ? WHERE usu_id = ?;`;
            //definição dos dados a serem atualizados em um array
                const values = [nome, email, senha, steamid, saldo, pix, cpf, adm, usu_id];
                //execução e obtenção de confirmação da atualização realizada
                const atualizadDados = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true,
                mensagem: `usuários ${usu_id} atualizado com sucesso!`,    
                dados: atualizadDados[0].affectedRows
                // mensSql: atualiazdos
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
    async apagarUsuarios(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Apagar usuários',    
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