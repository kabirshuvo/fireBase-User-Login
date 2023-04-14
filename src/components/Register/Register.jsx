import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from 'react';
import app from '../../firebase/firebase.config';

const Register = () => {
    const [email, setEmail] = useState();
    const auth = getAuth(app)

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        }).catch(error =>{
            console.error(error) 
        } )
        
    }

    const handleEmailChange = (event) => {
            // console.log(event.target.value)
            setEmail(event.target.value)
    }
    
    const handlePasswordBlur = (event) => {
           
            // console.log(event.target.value);
    }
    
    

    return (
        <div >
            <h4>Please Register</h4>

            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '.1rem'}}>
                <input onChange={handleEmailChange} type="email" name='email' id='email' placeholder='Your Email Here' />
                <br />
                <input onBlur={handlePasswordBlur} type="password" name='password' id='password' placeholder='password should be more than 6 charecter' />
                <br />
                <input type="submit" value={'Register'}></input>
            </form>
        </div>
    );
};

export default Register;