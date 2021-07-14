const express = require("express");
const router = express.Router();
const actorsModel = require("../model/actors.model");

//list
router.get('/', async function (req, res) {
    const row = await actorsModel.findAll();
    res.json(row);
})
//detail
router.get("/:id",async function(req,res){
    const actor_id = req.params.id;
    const detail = await actorsModel.findbyId(actor_id);
    if(detail < 1){
        res.json({
            "message":"not found"
        });
    }
    res.json(detail);
})
//Create
router.post('/',async function(req,res){
    const actor = req.body;
    const result = await actorsModel.add(actor);
    actor.actor_id = result[0];
    res.status(201).json(actor);
})
//Update
router.patch('/',async function(req,res){
    const actor = req.body;
    const actor_id = actor.actor_id;
    const result = await actorsModel.update(actor_id,actor);
    if(result === 0){
        res.json({
            "message":"not found"
        })
    }
    res.json(actor);
})
//Delete
router.delete('/:id',async function(req,res){
    const actor_id = req.params.id || 0;
    const result = await actorsModel.delete(actor_id);
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