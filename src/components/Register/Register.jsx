import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";
import app from '../../firebase/firebase.config';

const auth = getAuth(app)
const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
   

    const handleSubmit = (event) => {
        // Prevent to page refresh;
        event.preventDefault();
        setSuccess('');
        // collect form data
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        //*email validation
        if(!/(?=.*[A-Z])/.test(password)){
            setError('Please add atleast 1 uppercase');
            return
          } else if (!/(?=.*\d)/.test(password)) {
            setError("Password should contain at least one number") ;
            return ;
          } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setError("Password should contain at least one special character") ;
            return ;
          } else if (password.length < 6){
            setError('Password Must be at least more than 6 carecter')
            return
          }
        // create User in fireBase
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setError('')
            event.target.reset();
            setSuccess('Welcome to the magic world');
        }).catch(error =>{
            console.error(error.message);
            setError(error.message);
            
        } )
        
    }

    const handleEmailChange = (event) => {
            // console.log(event.target.value)
            // setEmail(event.target.value)
    }
    
    const handlePasswordBlur = (event) => {
           
            // console.log(event.target.value);
    }
    
    

    return (
        <Card style={{ width: '20rem', float: 'right' }}>
        <Card.Body>
        <Card.Title style={{textAlign: 'center', marginBottom: '1rem', fontSize: '2rem', color: '#007bff'}}>Please Register</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Form.Label style={{ textAlign: 'center', marginBottom: '1rem', marginTop: '1rem', fontSize: '1rem', color: '#007bff', transition: 'color 0.2s ease-in-out' }}
                onMouseEnter={(e) => e.target.style.color = '#6c757d'}
                onMouseLeave={(e) => e.target.style.color = '#007bff'}

            >  Email address* </Form.Label>

            <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} name='email' required />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Form.Label style={{ textAlign: 'center', marginBottom: '1rem', marginTop: '1rem', fontSize: '1rem', color: '#007bff', transition: 'color 0.2s ease-in-out' }}
                onMouseEnter={(e) => e.target.style.color = '#6c757d'}
                onMouseLeave={(e) => e.target.style.color = '#007bff'}

            >Password* </Form.Label>

            <Form.Control type="password" placeholder="Password should be more than 6 characters" onBlur={handlePasswordBlur} name='password' required/>
            </Form.Group>
            {error && <Alert variant="danger" style={{color: 'red'}}>{error}</Alert>}
            {success && <Alert variant="danger" style={{color: 'green'}}>{success}</Alert>}
            <Button variant="primary" type="submit" style={{ marginTop: '.2rem' }}>Register </Button>

            <p><small>Already Have an Account? Please  <Link to='/login'>LogIn</Link></small></p>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="light" style={{ margin: '.5rem' }}>
                    <FaGoogle style={{ marginRight: '.5rem' }} />
                            Register with Google
                    </Button>
                    <Button variant="light" style={{ margin: '.5rem' }}>
                    <FaGithub style={{ marginRight: '.5rem' }} />
                            Register with GitHub
                    </Button>
                    <Button variant="light" style={{ margin: '.5rem' }}>
                    <FaTwitter style={{ marginRight: '.5rem' }} />
                            Register with Twitter
                    </Button>
                    <Button variant="light" style={{ margin: '.5rem' }}>
                    <FaLinkedin style={{ marginRight: '.5rem' }} />
                            Register with LinkedIn
                    </Button>
            </div>

          </Form>
        </Card.Body>
       
      </Card>
    );
};

export default Register;