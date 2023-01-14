const produkController = require('../controller/products');


var express = require('express'),
    router = express.Router();

router.get('/', (req, res)=> {
    produkController.getAllProduct().then((payload)=>{
        res.json(200, {
            data: payload
        });
    }).catch((payload)=>{
        res.json(400, {
            data: payload
        })
    })
})

// DETAIL
router.get('/:id', (req, res)=> {
    const detail_id = req.params.id
    produkController.getDetailProduct(detail_id).then((payload)=>{
        res.json(200, {
            data: payload
        });
    }).catch((payload)=>{
        res.json(400, {
            data: payload
        })
    })
})

// UPDATE
router.put('/:id', (req, res)=> {
    const detail_id = req.params.id
    const update_body = req.body
    produkController.updateProduct(detail_id, update_body).then((payload)=>{
        res.json(200, {
            data: payload
        });
    }).catch((payload)=>{
        res.json(400, {
            data: payload
        })
    })
})

// DELETE
router.delete('/:id', (req, res)=> {
    const detail_id = req.params.id
    produkController.deleteProduct(detail_id).then((payload)=>{
        res.json(200, {
            data: payload
        });
    }).catch((payload)=>{
        res.json(400, {
            data: payload
        })
    })
})

// INSERT
router.post('/', (req, res)=> {
    const update_body = req.body
    produkController.insertProduct(update_body).then((payload)=>{
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