const express = require("express")
const app = express()
const ejs = require('ejs')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');

 app.get("/",(req,res) => {
        res.render("exercicio1");
 });

app.post("/",(req,res) => {
    let idade = req.body.fidade;
       if (idade>=15 && idade<30){
           res.send("Jovem");
       }
       else if  (idade>=30 && idade<60){ 
           res.send("Adulto");
      }
       else if  (idade>=60){ 
          res.send("Idoso");
       }
       else {  
           res.send("Criança");
      }
      }
);



app.listen(3000,function(erro){
    if (erro){
        console.log ('Ocorreu um erro')
    }else {
        console.log('Servidor iniciado com sucesso');
    }
    
})