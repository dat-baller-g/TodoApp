import React, {useState} from 'react';
import {Avatar, Button, Paper, Grid, Typography, Container} from "@material-ui/core"
 import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {GoogleLogin} from "react-google-login";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Input from "./Input";
import Icon from "./icon";
import {signUp, signIn} from "../../actions/auth.js";



import useStyles from "./styles";
import { render } from 'react-dom';

const initialState = {firstName: "", email: "", password: "", confirmPassword: ""}

function Auth() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);

    
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (e) =>{
      e.preventDefault();
      if (isSignUp) {
        dispatch(signUp(formData, navigate))
      } else {
        dispatch(signIn(formData, navigate))
      }
      console.log(formData)
    };

    const handleChange = (e) =>{
      setFormData({...formData, [e.target.name]: e.target.value })
    };

    const handleShowPassword = async () =>{
      setShowPassword((prevItems)=>!prevItems)
    }

    const googleSuccess = async (res) =>{
      const result = res?.profileObj
      const token = res?.tokenId;
      try {
        dispatch({type: "AUTH", data:{result, token}});
        navigate("/todos");
      } catch (error) {
        console.log(error)
      }      
      
    }

    const googleFailure = (error) =>{
      console.log(error)
      console.log("Google login failed. Try again later.")
    }



  return (
    <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>             
          </Avatar>
          <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {
                      isSignUp && (
                        <>
                             <Input type= "text" name="firstName" label="First Name" handleChange={handleChange} /> 
                        </>
                      )}
                      <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                      <Input name="password" label="Password" handleChange={handleChange} type={showPassword? "text" : 'password'} handleShowPassword={handleShowPassword} />
                      {isSignUp && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" />}
                      <Grid container justifyContent="flex-end">
                        <Grid item>
                           <Typography variant="h6" style={{display:"inline", fontSize: "15px"}}>{isSignUp? "Have a profile?" : "Don't have a profile?"}</Typography><Button color="primary" onClick={()=>{setIsSignUp((prevItems)=>{return !prevItems})}}>{isSignUp? "Sign In" : "Sign Up"}</Button>
                        </Grid>

                      </Grid>
                       
                                           
                                 
                      
               </Grid>
               <Button fullWidth type="submit" variant='contained' color="primary" className={classes.submit}>{isSignUp? "Sign up" : "Sign In"}</Button>
               <GoogleLogin 
                 clientId="432714621344-bdemq309t0hltadukofhto66hok9b808.apps.googleusercontent.com"
                 render={(renderProps)=>(<Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">Google Signin</Button>)}
                 onSuccess={googleSuccess}
                 onFailure={googleFailure}
                 cookiePolicy="single_host_origin"

               />
               
            </form>
        </Paper>
       
    </Container>
  )
}

export default Auth