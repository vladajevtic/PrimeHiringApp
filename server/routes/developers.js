const express = require('express');
const router = new express.Router();
const Developer = require('../models/developers');

router.get('/developers', async (req,res)=>{
   const allDevelopers =  await Developer.find({});
    res.status(200).send(allDevelopers);
})

router.get('/developers/:id', async (req,res)=>{
    const id = req.params.id;
    try{
        const foundDeveloper = await Developer.findOne({ _id: id });
        if(!foundDeveloper){
            return res.status(404).send()
        }
        res.send(foundDeveloper);
    }catch(e){
        res.status(500).send()
    }
});

router.post('/developers', async (req,res) =>{
    const developer = new Developer(req.body);
    try{
        await developer.save();
        res.status(201).send(developer)
    }catch(e){
        res.status(400).send(e)
    }
});

router.patch('/developers/:id', async (req,res) =>{
    const _id = req.params.id;
    const edit = Object.keys(req.body);
    const foundDeveloper = await Developer.findOne({ _id});
    edit.forEach((prop)=> foundDeveloper[prop] = req.body[prop]);
    try{
        await foundDeveloper.save();
        res.status(201).send(foundDeveloper)
    }catch(e){
        res.status(400).send(e);
    }
})

router.delete('/developers/:id', async (req,res)=>{
    const _id = req.params.id;
    try{
        const deleteDeveloper = await Developer.findOneAndDelete({ _id});
        if(!deleteDeveloper){
            return res.status(404).send({error: 'developer not found'})
        }
        res.send({
            ...deleteDeveloper,
            deleted: true,
        });
    }catch (e){
        res.status(500).send(e);
    }
    
})

module.exports = router;