import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {createTodo} from "../actions/todos";

const InputAreaToo = ({numberOfItems, activate, setActivate}) => {
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const dispatch = useDispatch();
        const [inputText, setInputText] = useState("");
      
        function handleChange(event) {
          const newValue = event.target.value;
          setInputText(newValue);         
        }

        const addItem = async (e)=>{            
                e.preventDefault();
                console.log(user?.result._id);
                const userProfile = user?.result._id
                dispatch(createTodo({inputText},  userProfile));            
                setInputText("");            
              
        }
        const addButton = document.getElementById("addButton");
        if(numberOfItems === 5){addButton.disabled = true};
          if(activate){addButton.disabled = false; setActivate(false)}


        



  return (
     <div className="form">
      {/* {console.log(...props.numberOfItems)} */}
     <form onSubmit={addItem}>
      <input onChange={handleChange} value={inputText} name="todo"/>
      <button type="submit" id='addButton' >
      
      
        <span className='addButton'>Add</span>
      </button>
    </form>
    </div>
  )
}

export default InputAreaToo