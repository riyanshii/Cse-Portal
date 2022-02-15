import React,{useState,useEffect} from "react";
import Fire from '../firebase/Fire';
import Loginform from './Loginform';
import Homepage from "./Homepage";
// import "./index.css"
import { BrowserRouter } from "react-router-dom";

const Loginauth = () => {
    const[user,setUser] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[emailError,setEmailError] = useState('');
    const[passwordError,setPasswordError] = useState('');
    const[hasAccount,setHasAccount] = useState('');

    const clearInputs = () => {
        setEmail("");
        setPassword("");
    };

    const clearErrors = () =>{
        setEmailError("");
        setPasswordError("");
    }
    const handleLogin = () => {
        clearErrors();
        Fire
            .auth()
            .signInWithEmailAndPassword(email,password)
            .catch(err => {
                switch(err.code)
                {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;  
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;    
                }
            });
    };

    const handleSignup = () => {
        clearErrors();
        Fire
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .catch(err => {
                switch(err.code)
                {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;    
                }
            });
    };

    const handleLogout = () =>{
            // Fire.auth().signOut();
            Fire.auth().signOut().then(function() {
                // Sign-out successful.
              }).catch(function(error) {
                // An error happened.
              });
    };

    const authListener = () =>{
        Fire.auth().onAuthStateChanged(user => {
            if(user)
            {
                clearInputs();
                setUser(user);
            }else {
                setUser("");
            }
        });
    };

    useEffect(() => {
        authListener();
    },[])
    return(
        <BrowserRouter>
            <div>
        {user ? (
            <Homepage handleLogout={handleLogout}/>
        ):(
            <Loginform 
           email={email} 
           setEmail={setEmail} 
           password = {password} 
           setPassword={setPassword} 
           handleLogin={handleLogin}
           handleSignup={handleSignup}
           hasAccount={hasAccount}
           setHasAccount={setHasAccount}
           emailError={emailError}
           passwordError = {passwordError}
           />
           
        )}
        
        </div>
        </BrowserRouter>
    );
};

export default Loginauth;