import jwt from "jsonwebtoken";
import User from "../models/User.js";

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            const error = { error: "Please provide username and password" };
            console.log(JSON.stringify(error));
            return res.status(400).json(error);
        }
        //controllers/jwt.js login 함수 수정
    } catch (error) {
        const errorJson = {
            error: { message: error.message, stack: error.stack },
        };
        console.log("Login error:", JSON.stringify(errorJson, null, 2));
        res.status(error.statusCode || 500).json(errorJson);
    }
};

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);

    res.status(200).json({
        msg: `Hello, ${req.user.username}`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    });
};

export { login, dashboard };
