import type { Request,Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
const JWT_PASSWORD = "abcd"

export const userMiddleware = (req:Request,res:Response,next:NextFunction)=>{
    const header = req.headers["authorization"];
    
    if (!header) {
        res.status(401).json({ message: "No authorization header provided" });
        return; // Stop execution here
    }
    
    try {
        // 2. TypeScript now knows 'header' is definitely a string
        const decode = jwt.verify(header, JWT_PASSWORD);
        
        // Optional: Attach decoded data to req object if needed
        //@ts-ignore
        req.userId = decode.id; 

        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid or expired token" });
    }
}