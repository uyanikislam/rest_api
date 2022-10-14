const jwt=require("jsonwebtoken")
function verifyToken(req,res,next) {
const authorization=req.header("Authorization");


if(!authorization){
    res.status(401).send("access problem, token provide?");
    return;
}

    const token=authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_PASS, (err,decoded) =>{
        if(err){
        res.status(401).send("token problem");
        return;
    }

    req.userId=decoded._id;

    next();
});
}
module.exports=verifyToken