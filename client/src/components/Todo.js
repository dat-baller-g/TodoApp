



import React, { useState } from "react";

function ToDoItem(props) {

   const [lineThrough, setLineThrough] = useState(false)

  return (
    
    <div>    
        <div>
          <ul>
            <li onClick={()=>{ setLineThrough((prevItems)=>{ return !prevItems  })}} 
                     style={{textDecoration: lineThrough? "line-through" : "none"}}>{props.text}
            </li>         
            <button style={{float:"right"}} onClick={()=>{props.onChecker(props.id); }}>Delete</button>
          </ul>
        </div>
     
        {/* props.setLineThrough(false) */}
    
    
    {/* {props.text.map((todo, index)=>{
      return(
        <div><ul><li onClick={()=>{ props.strikeItem()}} style={{textDecoration: props.lineThrough? "none" : "line-through"}}>{todo.todos}</li> 
        <button style={{float:"right"}} onClick={()=>{props.onChecker(); props.setLineThrough(false)}}>Delete</button></ul></div>
      )
    })} */}
     
    
    {/* <input type="checkbox" style={{display: lineThrough&& "none"}}/> */}
     {/* {props.text.map((todo, index)=>{
       return <div><ul><li onClick={()=>{console.log(index); props.strikeItem(index);}} style={{textDecoration: props.lineThrough? "none" : "line-through"}}>{todo}</li> <button style={{float:"right"}} onClick={()=>{props.onChecker(index); props.setLineThrough(false)}}>Delete</button></ul></div>
     })} */}
      {/* <li style={{textDecoration: lineThrough? "none" : "line-through"}}>{props.text.todos}</li>
      <button style={{float:"right"}} onClick={()=>{props.onChecker(props.id); setLineThrough(false)}}>Delete</button> */}

    </div>
  );
}

export default ToDoItem;






















