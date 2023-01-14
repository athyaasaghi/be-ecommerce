const db = require("../config/connection")

// INSERT REGISTRASI
function registrasiUsers(body){
    return new Promise((resolve, reject)=> {
        const { username, password } = body
        const sql = `INSERT INTO users(username, password) VALUES('${username}', '${password}')`

        db.query(sql, (err, fields)=> {
            if(err) return reject(err)
            if(fields){
                if(fields.affectedRows === 1){
                    resolve('data berhasil ditambahkan')
                }
                else{
                    reject('gagal')
                }
            }
        })
    })
}

// LOGIN 
function loginUsers(body){
   return new Promise((resolve, reject)=> {
    const { username, password } = body
    const sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`
    db.query(sql, (err, fields)=>{
        if(err) return reject(err)
        if(fields){
            if(fields.length > 0){
                resolve(fields[0])
            }
            else{
                reject('not found')
            }

        }
    })
   })
}

function getAllUsers(){
    return new Promise((resolve, reject)=>{
        const sql = `SELECT id, username, password FROM users`
        db.query(sql, (err, fields)=> {
            if(err) return reject(err)
            if(fields){
                resolve(fields);
            }
        })
    })
}


module.exports = { registrasiUsers, loginUsers, getAllUsers}
