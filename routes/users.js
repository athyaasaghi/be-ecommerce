const produkController = require('../controller/users');


var express = require('express'),
    router = express.Router();


// INSERT
router.post('/register', (req, res)=> {
    const update_body = req.body
    produkController.registrasiUsers(update_body).then((payload)=>{
        res.json(200, {
            data: payload
        });
    }).catch((payload)=>{
        res.json(400, {
            data: payload
        })
    })
})

// LOGIN
router.post('/login', (req, res)=> {
    // const username_login= req.body.username
    // const password_login= req.body.password
    const body_login = req.body
    produkController.loginUsers(body_login).then((payload)=>{
        res.json(200, {
            data: payload
        });
    }).catch((payload)=>{
        res.json(400, {
            data: payload
        })
    })
})



router.get('/', (req, res)=> {
    produkController.getAllUsers().then((payload)=>{
        res.json(200, {
            data: payload
        });
    }).catch((payload)=>{
        res.json(400, {
            data: payload
        })
    })
})
module.exports = router;
