const mysql = require ("mysql2/promise")
async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

const connection = await mysql.createConnection({
    host     :'localhost',
    port     : 3306,
    user     : 'root',
    password : '1234',
    database : 'exercicio3'
});


console.log('Conectou no MySQL!');
global.connection = connection;
return global.connection;
}

async function inserirUsuario(nome, sobrenome, idade, pais){
    const conn = await connect();
    const sql = 'INSERT INTO USUARIO (nome, sobrenome, idade, pais) VALUES (?, ?, ?, ?);';
    const values = [nome,sobrenome,idade,pais];
    return await conn.query(sql,values);

}


async function editarUsuario(nome, sobrenome, idade, pais){
    const conn = await connect();
  
    const [rows] = await conn.query('SELECT id FROM USUARIO ORDER BY id DESC LIMIT 1');
    const ultimoId = rows[0].id;
    const sql = 'UPDATE USUARIO SET nome = ?, sobrenome = ?, idade = ?, pais = ? WHERE id = ?';
    const values = [nome,sobrenome,idade,pais,ultimoId];
    
    return await conn.query(sql,values);
  }





module.exports = {inserirUsuario,editarUsuario}