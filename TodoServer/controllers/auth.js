import express from 'express';
import mongoose from 'mongoose';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

import User from "../models/users.js";

export const signIn = async (req, res) =>{
    const {email, password} = req.body;
    try {
        const existingUser = await User.findOne({email});
        if(!existingUser) return res.status(404).json({message: "User not found"});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({message: "Incorrect password"});

        //nect is to send a token to the frontend
        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, "theMainSecret", {expiresIn: "12h"});
        res.status(200).json({ result: existingUser, token})

    } catch (error) {
        res.status(500).json({message: "something went wrong"})
    }
    
};

export const signUp = async (req, res) =>{
    const {email, password, firstName, confirmPassword} = req.body;
    console.log(email, password, firstName, confirmPassword)
    try {
        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(400).json({message: "User already exists"});

        if(password !== confirmPassword) return res.status(400).json({message: "Passwords don't match"});
        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({email, password: hashedPassword, name: firstName});
        console.log(result)
        const token = jwt.sign({email: result.email, id: result._id}, "theMainSecret", {expiresIn: "1h"});
        res.status(200).json({ result, token})

    } catch (error) {
        console.log(error)
    }
}