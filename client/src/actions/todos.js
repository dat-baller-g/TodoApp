//import { applyMiddleware } from "redux"
import * as api from "../api/index"

export const getTodos = (user) => async (dispatch) =>{
    try {
        const {data} = await api.fetchTodos(user);
          //console.log(data)
        dispatch({ type: "GET_TODOS", payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const createTodo = (todo, user) => async (dispatch) =>{
    try {
        const {data} = await api.createTodo(todo, user);
        console.log(data)
        dispatch({type: "CREATE_TODO", payload: data.todos})
    } catch (error) {
        console.log(error)
    }
};

export const deleteTodo = (id, user) => async(dispatch) =>{
    try {
        const {data} = await api.deleteTodo(id, user);
        console.log(data.todos.length)
        data.todos.length === 0 && alert("YaY!!! You have completed all your tasks. You have a trophy added to your trophy shelf!")
    } catch (error) {
        console.log(error)
    }
}

export const clearTodos = (user) => async(dispatch) =>{
    try {
        const {data} = await api.clearTodos(user);
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}