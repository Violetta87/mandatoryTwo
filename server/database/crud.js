import db from "./connection.js"
//find all
//prepared statement
export async function findByEmail(email){
    const result = await db.get(`SELECT * FROM login WHERE email = ?`, [email])
    return result
}