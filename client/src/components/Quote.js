import React, { useState } from "react"
import '../quote.css';
// import Button from "react-bootstrap/Button";
// import animate from "animate.css"
// import 'bootstrap/dist/css/bootstrap.min.css';


function Quote() {

  var randomNumber = Math.floor(Math.random() * 50); 
  // var ranNum = Math.floor(Math.random() * 5); 
  // var colourArray = ["red", "blue", "yellow", "purple", "green"]

  const [quote, setQuote] = useState({
    txt: "",
    auth: ""
  });

  // const [boxStyle, setBoxStyle] = useState({
  //   backgroundColor: "",
  //   color: ""
  // })

  const [getQuote, setGetQuote] = useState(true)
  const [animate, setAnimation] = useState({
    animation: "",
    
  });

  
  function ani() {
    // document.getElementById('quote-text').className = 'classname';
    const element = document.getElementById('quote-text')
    element.classList.remove('classname'); // reset animation
    void element.offsetWidth; // trigger reflow
    element.classList.add('classname'); // start animation
  }


  React.useEffect(() => {
   
   if(getQuote){     
     
    fetch("https://zenquotes.io/api/quotes/")
    .then(response=>{
      if(response.ok){
        return(response.json())
      }
      throw response
    })
    .then(data=>{
        ani();    
        setQuote({
          txt: data[randomNumber].q,
          auth: data[randomNumber].a
        }) 
         
    })
    .catch(error=>{
      console.log(error)
    })
  }
  
  setGetQuote(false)    
  }, [getQuote, randomNumber])  

  var uri = `${quote.txt} - ${quote.auth}` 
    var res = encodeURIComponent(uri);

  

  return (
    <div className="App" >
      <div id="quote-box" >
        <h3 id="quote-text" > {quote.txt}</h3>
        <p id="author" style={{textShadow: "2px 2px 2px #fff"}}> {quote.auth}</p>
        <div></div>
        <button variant="dark" size="sm" id="new-quote" onClick={ ()=>{setGetQuote(true)} }>Next Quote</button>
        <button variant="dark" size="sm" id="tweet-quote" type="link" > <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + res} target="_blank" rel="noreferrer">Tweet Quote </a> </button>


      </div>
        
       
     
    </div>
  );
}

export default Quote;
