const express = require("express")
const app = express()
const ejs = require('ejs')
const bodyParser = require('body-parser')
const db = require("./db")


app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');

 app.get("/",(req,res) => {
        res.render("exercicio3");
 });

app.post("/",(req,res) => {
    let nome = req.body.nome;
    let sobrenome = req.body.sobrenome;
    let idade = req.body.idade;
    let pais = req.body.pais
    
    db.inserirUsuario(nome,sobrenome,idade,pais)
    res.render("usuarios", {nome:nome,sobrenome:sobrenome,idade:idade,pais:pais,})
});

app.post("/editar",(req,res) =>{
    let nome = req.body.nome;
    let sobrenome = req.body.sobrenome;
    let idade = req.body.idade;
    let pais = req.body.pais
    
    db.editarUsuario(nome,sobrenome,idade,pais)
    res.render("usuarios", {nome:nome,sobrenome:sobrenome,idade:idade,pais:pais})

});

app.listen(3000,function(erro){
    if (erro){
        console.log ('Ocorreu um erro')
    }else {
        console.log('Servidor iniciado com sucesso');
    }
    
})