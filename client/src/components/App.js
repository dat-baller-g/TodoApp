import React, { useState, useEffect } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

//import {useDispatch, useSelector} from "react-redux";

import Home from "./Home";
import Auth from "./Auth/Auth";




function App() {
 
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Auth/>} />
    <Route path="/todos" element={ <Home/>} />

    </Routes>
     
    </BrowserRouter>
    
      
    
    
  );
}

export default App;



































// import '../App.css';
// import Input from "./InputArea"
// import Todo from "./Todo"

// function App() {
//   const [items, setItems] = useState([]);

//   // React.useEffect(() => {
//   //   fetch("api")
//   //   .then((res) => res.json())
//   //   .then((data) => setData(data.message))
//   // }, [])

//   function addItems(newItem){
//     console.log(newItem);
//     setItems((prevItems)=>{
//       return([...prevItems, newItem])     
      
//     })
//   };

//   function strikeOut(id){
//      setItems((prevItems)=>{
//        return prevItems.filter((item, index)=>{
//         return index !== id
         
//        })        
         
//     })
//   }

 


//   return (
//     <div className="container">
//       <header className="heading">
//         <h1 className="heading">Hello there</h1>
//         {/* <p>{!data ? "Loading..." : data}</p> */}
//         <Input onAdd={addItems}/>
//         {items.map((item,index)=>{        
//          return <Todo todo={item} key={index} id={index} onStrike={strikeOut} />
//         })}
       
        
//       </header>
//     </div>
//   );
// }

// export default App;
