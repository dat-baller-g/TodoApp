import * as api from "../api/index";


export const signIn = (formData, navigate) => async(dispatch)=>{
    try {
        const { data } = await api.signIn(formData);
        dispatch({type: "AUTH", data});


        navigate("/todos")
    } catch (error) {
        console.log(error)
    }
}

export const signUp = (formData, navigate) => async(dispatch)=>{
    try {
        const { data } = await api.signUp(formData);
        console.log(data)
        dispatch({type: "AUTH", data});

        navigate("/todos")
    } catch (error) {
        console.log(error)
    }
}