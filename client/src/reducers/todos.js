export default (todos = [], action) => {
    switch (action.type) {
        case "GET_TODOS":
            
            return action.payload;
            
        case "CREATE_TODO":
            console.log("created todo")
            return [...todos, action.payload];
        case "DELETE_TODO":
            // todos.map((todo, index)=>{})
            console.log(todos)
            console.log(action.payload);
        case "CLEAR_TODOS":
            return action.payload;

            
            
    
        default:
            return todos
    }
}