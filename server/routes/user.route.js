import express from "express";
import {
    forgetPassword,
    getUserDetails,
    loginUser,
    logoutUser,
    registerUser,
    resetPassword,
    updatePassword,
    updateProfile,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const Router = express.Router()

Router.route("/register").post(registerUser)
Router.route("/login").post(loginUser)
Router.route("/logout").get(logoutUser)
Router.route("/password/forget").post(forgetPassword)
Router.route("/password/reset/:token").put(resetPassword)
Router.route("/profile").get(verifyJWT, getUserDetails)
Router.route("/password/update").put(verifyJWT, updatePassword)
Router.route("/me/update").put(verifyJWT, updateProfile)

export default Router