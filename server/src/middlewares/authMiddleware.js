import jwt from  "jsonwebtoken"
import UserModel from "../model/user.Model.js"

const authMiddleware = async ( req , res ,  next) =>{
    let token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"Token Not Fround"
        })
    }


    let decode =  jwt.verify(token , process.env.JWT_SECRET)

    if(!decode){
        return res.status(400).json({
            message:"UnUnauthorized Token"
        })
    }

    let user = await UserModel.findById(decode.id)

    req.user = user

    next()
}


export default  authMiddleware