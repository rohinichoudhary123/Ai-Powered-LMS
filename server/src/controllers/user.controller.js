import UserModel from "../model/user.Model.js"

 export const getCurrentUser = async(req , res) =>{
    try {
        let user = await  UserModel.findById(req.user)

          if(!user){
            return  res.status(400).json({
                message:"User Not Found"
            })
          }
         return res.status(200).json({
            message:"User Find SuccessFully"
         })
    } catch (error) {
         return res.status(500).json({
            success:false,
            message:"Internal server error",
            error:error.message
         })
    }
}