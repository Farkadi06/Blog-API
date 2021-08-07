const router = require("express").Router();
const User = require("../Models/User");

//UPDATE
router.post("/:id", async (req,res)=>{
    try{

    }catch(err){
        res.status(500).json(err); 
    }
})

//DELETE

module.exports = router