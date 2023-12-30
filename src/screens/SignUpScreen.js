import React, { useRef } from 'react';
import './SignUpScreen.css';
import { auth } from "../firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function SignUpScreen() {

  const emailRef=useRef(null);
  const passwordRef=useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{
      console.log(authUser);
    }).catch((error)=> {
    alert(error.message)
  });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then((userCredentials)=>{
      const user=userCredentials.user;
      alert(user.email+" logged in successfully")
    })
    .catch((error)=>{
      const errorCode=error.code;
      //const errorMessage=error.message;
      alert(errorCode);
    })
  };

  return (
    <div className='signUpScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email or phone number' type='email' />
        <input ref={passwordRef} placeholder='Password' type='password' />
        <button type='submit' onClick={signIn}>Sign In</button>
        <h4>
          <span className='signupScreen__gray'>New to Netflix? </span>
          <span className='signupScreen__link' onClick={register}>Sign Up now.</span>
          
        </h4>
      </form>
    </div>
  )
}

export default SignUpScreen