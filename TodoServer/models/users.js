import mongoose from "mongoose";
import { todoSchema } from "./todos.js";

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    id: {type: String},
    todos: [todoSchema]

});

export default mongoose.model("User", userSchema);

