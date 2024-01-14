import mysql from "mysql"

export const db  = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "diogoMnBr123",
    database: "crud"
})