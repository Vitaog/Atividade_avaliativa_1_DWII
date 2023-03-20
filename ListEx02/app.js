const express = require("express")
const app = express()
const ejs = require('ejs')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');

 app.get("/",(req,res) => {
        res.render("exercicio2");
 });

app.post("/",(req,res) => {
    let nota1 = req.body.nota1;
    let nota2 = req.body.nota2;
    let nota3 = req.body.nota3;
    let media = ((2*nota1) + (5*nota2) + (3*nota3)) / 10
       if (media>9 && media<=10){
           res.send(`A média do aluno é = ${media} e a sua classificação é A`);
       }
       else if (media>8 && media<=9){
        res.send(`A média do aluno é = ${media} e a sua classificação é B`);
      }
      
        else if (media>7 && media<=8){
        res.send(`A média do aluno é = ${media} e a sua classificação é C`);
      
    }
    else if (media>6 && media<=7){
        res.send(`A média do aluno é = ${media} e a sua classificação é D`);
      
    }
    else if (media>5 && media<=6){
        res.send(`A média do aluno é = ${media} e a sua classificação é E`);
      
    }
    else  {
        res.send(`A média do aluno é = ${media} e a sua classificação é F`);
      
    }
});



app.listen(3000,function(erro){
    if (erro){
        console.log ('Ocorreu um erro')
    }else {
        console.log('Servidor iniciado com sucesso');
    }
    
})