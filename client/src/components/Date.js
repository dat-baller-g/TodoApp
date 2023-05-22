// import React, { useEffect } from 'react'

// const Time = () => {

//     const theDate = new Date().toLocaleDateString();
//     const currentTime = new Date().toString().split(" ").splice(4, 1).join(" ");
//     function getTime(){
//         const currentTime = new Date().getMinutes()
//         return currentTime
//     }
     

    // function formatTime(time) {
    //     if ( time < 10 ) {
    //         return '0' + time;
    //     }
    //     return time;
    // }

    // function updateTime() {
    //     const date = new Date();
    
    //     const hour = formatTime(date.getHours());
    //     const minutes = formatTime(date.getMinutes());
    //     const seconds = formatTime(date.getSeconds());
    
    
    
        
    // }

    // useEffect(()=>{
    //     const theTime = setInterval(getTime, 1000)
    // })




//   return (
//     <> 
//         <div>{theDate}</div>
//         <div>{getTime()}</div>
//         <div>{currentTime}</div>
        
//     </> 
//   )
// }

// export default Time



import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clearTodos} from "../actions/todos"

function Time(){
  const [date, setDate] = useState(new Date());
  const theDate = new Date().toLocaleDateString();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const userProfile = user?.result._id
  
  function refreshClock() {
    setDate(new Date());
  }

  const myDate = date.toLocaleTimeString
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    date.toLocaleTimeString() === "12:00:00 AM" && dispatch(clearTodos(userProfile))
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [date, dispatch]);

  


  return (
      <>
      {    date.toLocaleTimeString() === "9:36:00 PM" && console.log("yay it worked again")
}
      <div style={{textAlign: "left"}}>{theDate}</div>
        <span>
      {date.toLocaleTimeString()}
    </span>
      </>
    
  );
}
export default Time;