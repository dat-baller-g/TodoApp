import express from 'express';
import mongoose from 'mongoose';

import Todo, {Task} from '../models/todos.js';
import User from '../models/users.js';

const router = express.Router();

export const getTodos = async(req, res) =>{
    const user = req.params
      //console.log(user.user)
    //get user email, get the todo array in user and store in variable, then send back as todos
    try {
        const todos = await User.find({_id: user.user});     
        //console.log(todos[0].todos)   
        res.status(200).json(todos[0].todos);
    } catch (error) {
        console.log(error)
    }

}

export const createTodo = async (req, res) =>{
    //get todo from body, search for user with user id, push todo into todos array in user found
    const todoItem = req.body.inputText;
    const user = req.params
    console.log(todoItem)
    
    //const todos = await Todo.find();
    //const newTodo = new Todo({todos: todoItem, todosLeft: todos.length });
    try {
        const newTodoItem = await new Todo({item: todoItem})
        console.log(newTodoItem);
         await newTodoItem.save()
        const todos = await User.findByIdAndUpdate({_id: user.user}, {$push: {todos: newTodoItem}}, {new:true});
        console.log(todos)
        // const todos = await Todo.find()
        // const id = todos[0]._id
        // console.log(id)
        // console.log(req.body)
       
        // console.log(todoItem)
         //await Todo.findOneAndUpdate({_id:id}, {"$push": {"todos": todoItem}}, {new:true});
          //await newTodo.save();        
        
         res.status(201).json(todos);
        
    } catch (error) {
        console.log(error)
    }
};

export const deleteTodo = async(req, res) =>{
    //serach for user with id, search d array for the name and delete particular item
    const userId = req.params.user;
    console.log(req.params.id, req.params.userId)
    const id = req.params.id
    
    try {
        // await User.findById({_id: userId}, (err, result)=>{console.log(result)})
        //await Todo.findByIdAndRemove(_id);
        // await Task.findOneAndUpdate({_id :id}, {$inc : {'post.likes' : 1}})
        const todo = await User.findByIdAndUpdate({_id: userId}, {$pull: {todos: { _id: id }}}, {new:true})
       console.log(todo);
       res.status(201).json(todo);
    } catch (error) {
        console.log(error)
    }
         
       //if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
         
}

export const clearTodos = async(req, res) =>{
    //search user id and delete everything in array.
    const userId = req.params.user;
    try {
        const todo = await User.findByIdAndUpdate({_id: userId}, {$set: {todos: []}}, {new:true}, (err, result)=>{if(result){console.log("Successfully cleared")}})
        // const todos = await Todo.find()
        //await Todo.deleteMany({}, ()=>{console.log("Successfully cleared")})
        res.status(200).json({message: "todos cleared"});
    } catch (error) {
        console.log(error)
    }

}

export default router;

