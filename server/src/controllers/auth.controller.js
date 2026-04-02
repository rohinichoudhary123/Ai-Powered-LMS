import genToken from "../config/token.js";
import  UserModel  from "../model/user.Model.js";
import bcrypt from "bcrypt"
import validator from "validator";

export const singUpController = async (req , res) =>{
    try {
        let {name , email , password , role } = req.body

        if(!name || !email || !password || !role){
            return res.status(401).json({
                message:"All field are required"
            })
        }

        let existUser = await UserModel.findOne({email})


        if(existUser){
            return res.status(400).json({
                message: "User Already exist"
            })
        }

        if(!validator.isEmail){
            return res.status(404).json({
                message:"Enter valid Email"
            })
        }


        if(password.length < 8){
            return res.status(400).json({
                message:" Enter strong password"
            })
        }

        let hashPass   = await bcrypt.hash(password , 10)

        let newUser = await UserModel.create({
            name , 
            email,
            password:hashPass,
            role
        })

        if(!newUser){
            return res.status(401).json({
                message:"Something went wrong"
            })
        }

        // let token =  jwt.sign({id: newUser._id} , config.JWT_SECRET ,{
        //     expiresIn:"1h"
        // })

        // res.cookie("token"  , token)

        let token  = await genToken(newUser._id)

        res.cookie("token"  , token ,{
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge: 7 * 24 *60 * 60 * 1000
        })
        return res.status(201).json({
            success:true,
            message:" User Register Successfully",
            data:newUser
        })
    } catch (error) {
        console.log(error.message);
        
      return res.status(500).json({
        success:false,
        message:" Internal server error",
        error:error.message
      })   
    }
}

export const loginController = async (req , res) =>{
    try {
        

        let {email , password} = req.body

        if(!email || !password){
            return res.status(400).json({
                message:" All Field are required"
            })
        }

        let existUser = await UserModel.findOne({email})

        if(!existUser){
            return res.status(401).json({
                message:"User Not Found"
            })
        }


        let isMatch = await bcrypt.compare(password , existUser.password)


        if(!isMatch){
            return res.status(400).json({
                message:"Incorrect Password"
            })
        }

          let token  = await genToken(existUser._id)

        res.cookie("token"  , token ,{
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge: 7 * 24 *60 * 60 * 1000
        })
        return res.status(200).json({
            success:true,
            message:" User Login Successfully",
             data:existUser
        })


    } catch (error) {
        console.log(error);
        
         return res.status(500).json({
            success:false,
            message:"Internal server error"
         })
    }
}

export const logoutController = async (req, res) =>{
    try {
        res.clearCookie("token")


        return res.status(200).json({
            success:true,
            message:"User Logout SuccessFully"
        })
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            success:false,
            message:"Internal server error",
            error:error.message
        })
    }
}