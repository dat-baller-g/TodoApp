import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'


import ToDoItem from "./Todo";
import Quote from './Quote';
import Time from "./Date"
import '../App.css';
import {getTodos, createTodo, deleteTodo, clearTodos} from "../actions/todos";
import InputAreaToo from "./InputAreaToo";
const user = JSON.parse(localStorage.getItem("profile"));



function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activate, setActivate] = useState(false);

  const todoItems = useSelector((state) => state.todos);
  let numberOfItems = todoItems.length
  const [itemsCompleted, setItemsCompleted] = useState(0);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [trophyCount, setTrophyCount] = useState(0);

  const userProfile = user?.result._id

  // console.log(todoItems)

  useEffect(() => {
    // if(user){
    //   navigate("/todos")
    // };
    dispatch(getTodos(user?.result._id));
  }, [createTodo(), dispatch]);

  // if(!user.token){
  //   navigate("/auth")
  // };


  // function addItem(inputText) {
  //   // setItems((prevItems) => {
  //   //   return [...prevItems, inputText];
  //   // });
  //   console.log(inputText)
  //   console.log(user?.result._id)
  //   dispatch(createTodo(inputText, user?.result._id));
    
  // }


  function deleteItem(id) {
    // setItems((prevItems) => {
    //   return prevItems.filter((item, index) => {
    //     return index !== id;
    //   });
    // });
    console.log(id)
    dispatch(deleteTodo(id, userProfile));
    setItemsCompleted((prevItems)=>{
      return  prevItems + 1
    })
        
    
  };

   const logOut = () =>{
      
    dispatch({type:"LOGOUT"});
    navigate("/")
    setUser(null)
   }

  return (
    <div className="container">
    <FontAwesomeIcon style={{display: "inline", float: "right", color: "#02021a"}} icon={faTrophy}/>
    {user && <h3>Hello {user.token.length < 500 ? user?.result.name : user?.result.givenName}</h3>}
    {/* <h3>Hello {user.token.length < 500 ? user.result.name : user.result.givenName}</h3> */}
    <button onClick={logOut} className="logout">Logout</button>
    <button onClick={()=>{dispatch(clearTodos(userProfile)); setItemsCompleted(0); setActivate(true)}} style={{backgroundColor: "#02021a"}} className="logout">New Day?</button>
    <Time />
    
     <Quote />
      <div className="heading">
        <h1>Daily 5s</h1>
        {/* <h6> No of todos completed: {itemsCompleted} </h6> */}
        <h6 style={{float:"left"}}> No of todos left: {numberOfItems} </h6>       
      </div>
      {/* <InputArea onAdd={addItem} /> */}
      <InputAreaToo numberOfItems={numberOfItems} activate={activate} setActivate={setActivate}/>
      <div>
        <ul style={{display: "block"}}>
          {todoItems.map((todoItem, index) => (
            
              <ToDoItem
              key={index}
              id={todoItem._id}              
              text={todoItem.item}
              onChecker={deleteItem}
              // strikeItem={strikeItem}
              // lineThrough={lineThrough} 
              // setLineThrough={setLineThrough}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
