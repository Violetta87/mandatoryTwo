import db from "./connection.js";


//if it gives a number it returns true - if it gives -1 it returns false
const isDeleteMode = process.argv.findIndex((argument) => argument === "delete_mode") === -1 ? false : true;

if(isDeleteMode) {
    connection.exec(`DROP TABLE login;`);
}


//DDL
await db.exec(`CREATE TABLE IF NOT EXISTS login (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT,
    password TEXT
);`);

//DML
await db.exec(`INSERT INTO login (email, password) VALUES ('cam', 'test')`);

const data = await db.get(`SELECT * FROM login`)
