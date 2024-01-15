import mysql from "mysql"


//configuração inicial do banco de dados. primeiro step é passar o createConnection com as credenciais do banco. Credenciais aws também passam aqui?
export const db  = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "diogoMnBr123",
    database: "crud"
})