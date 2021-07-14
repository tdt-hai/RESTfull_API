const express = require("express");
const router = express.Router();
const customerModel = require("../model/customers.model");

//list
router.get('/', async function (req, res) {
    const row = await customerModel.findAll();
    res.json(row);
})
//detail
router.get("/:id",async function(req,res){
    const customer_id = req.params.id;
    const detail = await customerModel.findbyId(customer_id);
    if(detail < 1){
        res.json({
            "message":"not found"
        });
    }
    res.json(detail);
})
//Create
router.post('/',async function(req,res){
    const customer = req.body;
    const result = await customerModel.add(customer);
    customer.customer_id = result[0];
    res.status(201).json(customer);
})
//Update
router.patch('/',async function(req,res){
    const customer = req.body;
    const customer_id = customer.customer_id;
    const result = await customerModel.update(customer_id,customer);
    if(result === 0){
        res.json({
            "message":"not found"
        })
    }
    res.json(customer);
})
//Delete
router.delete('/:id',async function(req,res){
    const customer_id = req.params.id || 0;
    const result = await customerModel.delete(customer_id);
    if(result === 0)
    {
        res.json({
            "message":"not found"
        })
    }
    res.status(200).json({
        "message":"DELETE SUCCESS"
    });
})
module.exports = router;