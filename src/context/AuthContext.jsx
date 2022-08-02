import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import {useNavigate} from 'react-router-dom';

import React from 'react'

const baseUrl = process.env.REACT_APP_IS_DEPLOYED === 'true'
  ?'https://lit-tundra-19708.herokuapp.com/'
  :"http://127.0.0.1:8000/"

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children}) => {
    const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
    ? JSON.parse(localStorage.getItem("authTokens"))
    : null
    );
    const [user,setUser] = useState(()=>
    localStorage.getItem("authTokens")
    ? jwt_decode(localStorage.getItem("authTokens"))
    : null
    );
    const [loading,setLoading] = useState(true);

    const history = useNavigate();

    const loginUser = async(username,password) => {
        const response = await fetch(baseUrl+"api/token/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              username,
              password
            })
          });
          const data = await response.json();

          if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access));
            localStorage.setItem("authTokens", JSON.stringify(data));
            history('/');
          }else {
            alert('something went wrong!!')

          }
          
        
    };

    const registerUser = async (username,password,password2)=>{
        const response = await fetch(baseUrl+"api/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
                password2
            })
        });
        if(response.status === 201) {
            console.log(response)
            history('/login');
        }else {
            alert('Something went wrong');
        }
    };

    const logoutUser = () =>{
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens');
        history("/")
    };

    const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    registerUser,
    loginUser,
    logoutUser
    };

    useEffect(()=>{
        if (authTokens) {
            setUser(jwt_decode(authTokens.access));
        }
        setLoading(false);
    }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
        {loading ? null : children}
    </AuthContext.Provider>
    )
};


