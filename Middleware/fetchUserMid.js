import jwt from 'jsonwebtoken';

const fetchUserMid = (req,res,next)=>{
    const token = req.header('auth-token');
    const JWT_SECRET = 'thisisgood$ecretkey.anditsmadebytalha';
    if(!token){
        res.json('You need to login to perform this activity.');;
    }
    try {
        const verifyToken = jwt.verify(token, JWT_SECRET);
        req.user = verifyToken.data;
        next();
    } catch (error){
        console.error(error.message);
        res.status(402).json('Error in verifying. Please try again.');
    }
}

export default fetchUserMid;