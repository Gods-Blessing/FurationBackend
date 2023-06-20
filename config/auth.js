const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports.verifyToken = async function(req,res,next){
    
    try {
        let authHeader = req.headers.authorization.split(" ")[1];
        console.log(authHeader);
        if(authHeader){
                    const userfromtoken = jwt.verify(req.headers.authorization.split(" ")[1], process.env.AUTH_SECRET);
                    console.log("user id",userfromtoken);
                    
                    req.user = userfromtoken.id;
                    
                    next();
        }else
        {
            return res.status(401).json({error:"you are not authorized"})
        }
        
    } catch (error) {
        return res.status(404).json({
            message:'you are not authorized'
        })
    }
}

