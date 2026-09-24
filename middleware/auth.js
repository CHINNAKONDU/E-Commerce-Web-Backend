import express from "express";
import jwt from "jsonwebtoken";
import user from "../model/user.js";

const router = express.Router();


// JWT Authentication Middleware
export const authenticate = async (req, res, next) => {

    try {

        // 1. Get Authorization header
        const authHeader = req.header("Authorization");

        // 2. Check token
        if (!authHeader || !authHeader.startsWith("Bearer ")) {

            return res.status(401).json({
                message: "No token, access denied"
            });

        }

        // 3. Get token
        const token = authHeader.replace("Bearer ", "");

        // 4. Verify token
        const decoded = jwt.verify(
            token,
            "shhdhdhddhd"
        );

        // 5. Find user in MongoDB
        const foundUser = await user
            .findById(decoded.id)
            .select("-password");

        // 6. Check user
        if (!foundUser) {

            return res.status(401).json({
                message: "User not found"
            });

        }

        // 7. Store user in request
        req.user = foundUser;

        // 8. Go to next route
        next();

    } catch (error) {

        console.log("JWT Error:", error.message);

        return res.status(401).json({
            message: "Token is not valid"
        });

    }

};


// Verify route
router.get("/verify", authenticate, (req, res) => {

    res.status(200).json({
        isValid: true,
        userData: req.user
    });

});


export default router;