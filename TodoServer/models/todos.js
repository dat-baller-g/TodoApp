import express from "express";
import mongoose from "mongoose"



export const todoSchema = new mongoose.Schema({
    item: String,
    
});

var Todo = new mongoose.model("Todo", todoSchema);

const tasksCompletedSchema = new mongoose.Schema({
    tasksCompleted: Number
});

export var Task = new mongoose.model("Task", tasksCompletedSchema);

export default Todo;