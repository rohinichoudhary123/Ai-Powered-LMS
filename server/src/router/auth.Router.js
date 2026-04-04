import express from "express";
import {loginController, logoutController,singUpController } from "../controllers/auth.controller.js";

const router = express.Router()

router.post("/register" , singUpController)

router.post("/login" , loginController) 

router.get("/logout" , logoutController)

export default router