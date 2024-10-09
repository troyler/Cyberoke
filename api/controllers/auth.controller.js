import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';


export const signup = async (req, res, next) => {
    const { username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword}); //if key and value have same name, no need for key
    try{
        await newUser.save();
        res.status(201).json({ message: "User created successfully"});
    }
    catch(error) {
        next(error);
    };
};


export const signin = async (req, res, next) => {
    const { email, password} = req.body;
    try{
        const validUser = await User.findOne({email});
        if (!validUser) return next(errorHandler(401, "User not found"));
            const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validUser) return next(errorHandler(401, "Invalid Credentials"));
        const token = jwt.sign({ id: validUser._id}, process.env.JWT_SECRET); //create token using mongo id attribute
        const { password: hashedPassword, ...rest } = validUser._doc; //remove password
        const expiryDate = new Date(Date.now() + 3600000);
        res.cookie('token', token, {httpOnly: true, expires: expiryDate }).status(200).json(rest);
    } catch(error) {
        next(error);
    };
};

