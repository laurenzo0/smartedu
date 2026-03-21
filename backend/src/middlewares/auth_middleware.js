import jwt from 'jsonwebtoken';

export const auth_middleware = (req, res, next)=>{
    const token = req.header('Authorization')?.replace('Bearer ', "");
    console.log (`token: ${token}`);
    if(!token){
        return res.status(400).json({message: "no token provided"})
    }
    try{
        
        //verify token
        const decoded = jwt.verify(token, 'smartedu_secret_key_123');
        req.user = decoded;
        console.log(`user: ${req.user.id}, ${req.user.role}`)
        next();
    }
    catch(err){
        return res.status(400).json("invalid token")
    }

}