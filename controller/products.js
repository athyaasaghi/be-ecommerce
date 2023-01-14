const db = require("../config/connection")

function getAllProduct(){
    return new Promise((resolve, reject)=>{
        const sql = `SELECT id, nama_produk, harga_produk FROM produk`
        db.query(sql, (err, fields)=> {
            if(err) return reject(err)
            if(fields){
                resolve(fields);
            }
        })
    })
}

// detail, update, delete, insert
// DETAIL
function getDetailProduct(id){
    return new Promise((resolve, reject)=>{
        const sql = `SELECT * FROM produk WHERE id = ${id}`
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

// UPDATE
function updateProduct(id, body){
    return new Promise((resolve, reject)=>{
        const id_produk =  id
        const { nama_produk, harga_produk, detail_produk } = body

        const sql = `UPDATE produk SET nama_produk = '${nama_produk}', harga_produk='${harga_produk}', detail_produk='${detail_produk}' WHERE id=${id_produk}`

        db.query(sql, async (err, fields)=> {
            if(err) return reject(err)
            if(fields){
                resolve(await getDetailProduct(id));
            }
        })
    })
}

// DELETE 
function deleteProduct(id){
    return new Promise((resolve, reject)=>{

        const sql = `DELETE FROM produk WHERE id = ${id}`

        db.query(sql, (err, fields)=> {
            if(err) return reject(err)
            if(fields){
                if(fields.affectedRows === 1){
                    resolve('sukses')
                }
                else{
                    reject('data tidak ditemukan')
                }
            }
        })
    })
}

// INSERT
function insertProduct(body){
    return new Promise((resolve, reject)=>{
        const { nama_produk, harga_produk, detail_produk } = body

        const sql = `INSERT INTO produk(nama_produk, harga_produk, detail_produk) VALUES('${nama_produk}', '${harga_produk}', '${detail_produk}')`

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

module.exports = {getAllProduct, getDetailProduct, updateProduct, deleteProduct, insertProduct}