// import React, {useState} from 'react'


// import Todo from "./Todo"




// const InputArea = () => {
//   const [item, setItem] = useState("");
//   const [items, setItems] = useState([]);
 



//   const handleChange = (e)=>{
//     setItem(e.target.value)
//    // console.log(item)
//   }

//   const handleSubmit = (e) =>{
//     e.preventDefault();
//     setItems((prevItems)=>{
//       return [...prevItems, item]
//     });
//     setItem("")
//     console.log("clicked")
//     console.log(item)    
     
//   }

//   const deleteItem = (id) =>{
//       setItems((prevItems)=>{
//         return prevItems.filter((item, index)=>{
//           return index !== id
//         })
//       })
//   }



//   return (
//     <div>
      
//         <form className='form' onSubmit={handleSubmit}>
//           <input type="text" onChange={handleChange} value={item}></input>
//           <button type='submit'>Add</button>
//         </form>
//         <ul style={{display: "block"}}>        
//             {items.map((item, index)=>{
//             return (  
              
//                 <Todo item={item} setItem={setItem} key={index} id={index} deleteItem={deleteItem}/>
                   
//             )        
//             })}  
//        </ul>
      
      
//     </div>
    
//   )
// }

// export default InputArea





import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
   
  }

  // function handleSubmit(e){
  //   e.preventDefault();
  //   console.log(inputText)
  //   props.onAdd(inputText);
  //   setInputText("");
  // }

  return (
    <div className="form">
     <form>
      <input onChange={handleChange} type="text" value={inputText} name="todo"/>
      <button
        //  type="submit"    
        onClick={(e)=>{
          e.preventDefault();
          console.log(inputText)
          props.onAdd(inputText);
          setInputText("");
        }}    
      >
        <span>Add</span>
      </button>
    </form>
    </div>
  );
}

export default InputArea;























