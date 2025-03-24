
-- Tabela de Usuários
CREATE TABLE USUARIOS (
    usu_id INT AUTO_INCREMENT PRIMARY KEY,
    usu_nome VARCHAR(100) NOT NULL,
    usu_email VARCHAR(100) UNIQUE NOT NULL,
    usu_senha VARCHAR(255) NOT NULL,
    usu_steamid VARCHAR(50) UNIQUE NOT NULL,
    usu_saldo DECIMAL(10,2) DEFAULT 0.00,
    usu_pix VARCHAR(100) UNIQUE,
    usu_cpf VARCHAR(14) UNIQUE,
    usu_adm BOOLEAN DEFAULT FALSE
);

-- Tabela de Skins
CREATE TABLE SKINS (
    skin_id INT AUTO_INCREMENT PRIMARY KEY,
    usu_id INT NOT NULL,
    skin_nome VARCHAR(100) NOT NULL,
    skin_cond VARCHAR(50) NOT NULL,
    skin_preco DECIMAL(10,2) NOT NULL,
    skin_data DATETIME DEFAULT CURRENT_TIMESTAMP,
    skin_img VARCHAR(255),
    skin_status ENUM('disponível', 'vendido', 'reservado') NOT NULL,
    skin_float DECIMAL(5,3),
    FOREIGN KEY (usu_id) REFERENCES USUARIOS(usu_id) ON DELETE CASCADE
);

-- Tabela de Transações
CREATE TABLE TRANSACOES (
    trans_id INT AUTO_INCREMENT PRIMARY KEY,
    usu_id INT NOT NULL,
    skin_id INT NOT NULL,
    trans_valor DECIMAL(10,2) NOT NULL,
    trans_status ENUM('pendente', 'concluído', 'cancelado') NOT NULL,
    trans_data DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usu_id) REFERENCES USUARIOS(usu_id) ON DELETE CASCADE,
    FOREIGN KEY (skin_id) REFERENCES SKINS(skin_id) ON DELETE CASCADE
);

-- Tabela de Ocorrências
CREATE TABLE OCORRENCIAS (
    oco_id INT AUTO_INCREMENT PRIMARY KEY,
    trans_id INT NOT NULL,
    oco_valor DECIMAL(10,2),
    oco_situacao TEXT NOT NULL,
    oco_data DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (trans_id) REFERENCES TRANSACOES(trans_id) ON DELETE CASCADE
);

-- Tabela de Avaliações
CREATE TABLE AVALIACOES (
    av_id INT AUTO_INCREMENT PRIMARY KEY,
    usu_id INT NOT NULL,
    av_nota INT CHECK (av_nota BETWEEN 1 AND 5),
    av_comentario TEXT,
    av_moderacao BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (usu_id) REFERENCES USUARIOS(usu_id) ON DELETE CASCADE
);
