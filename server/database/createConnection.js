import db from "./connection.js";
import dotenv from "dotenv"
dotenv.config();
import bcrypt from "bcrypt";


//if it gives a number it returns true - if it gives -1 it returns false
const isDeleteMode = process.argv.findIndex((argument) => argument === "delete_mode") === -1 ? false : true;

if(isDeleteMode) {
    db.exec(`DROP TABLE login;`);
}

//DDL
await db.exec(`CREATE TABLE IF NOT EXISTS login (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT,
    password TEXT
);`);

//bcrypt

const password = process.env.PASSWORD;
const hashedPassword = await bcrypt.hash(password, 12);
const email = process.env.EMAIL;



//DML
await db.run(`INSERT INTO login (email, password) VALUES (?, ?) `, [email, hashedPassword]);
const data = await db.all(`SELECT * FROM login`)
console.log(data)

