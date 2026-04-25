const jwt = require('jsonwebtoken')
const JWT_USER_SECRET = process.env.JWT_USER_PASSWORD


async function userMiddleware(req,res,next){
    const token = req.headers.token;
    const decoded = await jwt.verify(token,JWT_USER_SECRET)
    if(decoded){
        req.userId = decoded.id;
        next();
    }else{
        res.status(403).json({
            message : "You are not signed in"
        })
    }
}

module.exports = {
    userMiddleware : userMiddleware
}