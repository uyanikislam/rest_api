const express=require("express");

const router= express.Router();

router.get("/", (req,res) =>{
    res.send("fetch product list");
});

router.get("/:id", (req,res) =>{
    res.send(`fetch product ${req.params.id}`);
});

router.post("/", (req,res) =>{
    res.send("create product");
});

router.put("/:id", (req,res) =>{
    res.send(`update product ${req.params.id}`);
});

router.delete("/:id", (req,res) =>{
    res.send(`delete product ${req.params.id}`);
});


module.exports=router;
