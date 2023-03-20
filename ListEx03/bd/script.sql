create database exercicio3;

CREATE TABLE USUARIO (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL,
    idade INT,
    pais VARCHAR(50),
    PRIMARY KEY (id)
);