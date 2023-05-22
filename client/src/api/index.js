import axios from "axios";

const API = axios.create({baseURL: "http://localhost:2000"});


API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const fetchTodos = (user) => API.get(`/todos/${user}`);
export const createTodo = (newTodo, user) => API.post(`/todos/${user}`, newTodo); 
export const deleteTodo = (id, user) => API.delete(`/todos/${id}/${user}`);
export const clearTodos = (user) => API.delete(`/todos/${user}`);

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
