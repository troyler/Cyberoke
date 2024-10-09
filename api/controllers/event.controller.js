import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const createEvent = async (req, res, next) => {
    const { date, inviteList, location, description} = req.body;
    const newEvent = new CyberokeEvent({ date: date, host: creator_mongo_id, location: location, inviteList: inviteList}); //if key and value have same name, no need for key
    try{
        await newEvent.save();
        res.status(201).json({ message: "New Event Created"});
    }
    catch(error) {
        next(error);
    };
};

