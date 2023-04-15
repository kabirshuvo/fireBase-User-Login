import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";
import app from '../../firebase/firebase.config';




const auth = getAuth(app);

const LoginPage = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const emailRef = useRef()




  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);



    //validation
    setError('');
    setSuccess('');

    if(!/^(?=.*[A-Z]).+$/.test(password)){
        setError('Please add at least two uppercase.');
        return
    }
    else if (!/^(?=.*\d).+$/.test(password)){
        setError('Please add at least one Number');
        return
    }
    else if (!/^(?=.*[!@#$%^&*]).+$/.test(password)){
        setError('Please add a special character. example: ! @ # $ % ^ & * ');
        return
    }
    else if (password.length < 7){
        setError('Password must be at least 7 Chars. Long.');
        return
    }
    
    

    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const loggedUser = result.user;
        setSuccess('Welcome to the Magic world');
        console.log(loggedUser);
        if(!loggedUser.emailVerified){

        }
      }).catch(error => {
        console.error(error);
        setError(error.message);
      });
  }

  const handleEmailChange = (event) => {
    // console.log(event.target.value)
    // setEmail(event.target.value)
}

const handlePasswordBlur = (event) => {
   
    // console.log(event.target.value);
}

const handleResetPassword = event => {
        const email = emailRef.current.value;
        if (!email){
            alert('Please Provide your email address to reset password')
            return; 
        }
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('Please check you email')
        }).catch( error => {
            console.log(error);
            setError(error.message)
        })
}

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center login-container">
      <Card className="p-4">
        <Card.Title style={{ textAlign: 'center', marginBottom: '1rem', marginTop: '1rem', fontSize: '1.5rem', color: '#007bff' }}>Login</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} name="email" ref={emailRef}/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password should be more than 6 characters" onBlur={handlePasswordBlur} name="password" />

{/* The Meaasges to user */}
            
            {error && <Alert variant="danger" className="mt-2" style={{color: 'red'}}>{error}</Alert>}
            {success && <Alert variant="success" className="mt-2" style={{color: 'green'}}>{success}</Alert>}


          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Login
          </Button>

          <p><small>New to this website? please <Link to='/register'>Register</Link></small></p>
          <p><small>Forget Password? Please <button onClick={handleResetPassword} className=" btn btn-link">Reset Password</button></small></p>

          <div style={{ textAlign: 'center' }}>
            <Button variant="light" style={{ margin: '.5rem' }}>
              <FaGoogle style={{ marginRight: '.5rem' }} />
              Login with Google
            </Button>
            <Button variant="light" style={{ margin: '.5rem' }}>
              <FaGithub style={{ marginRight: '.5rem' }} />
              Login with GitHub
            </Button>
            <Button variant="light" style={{ margin: '.5rem' }}>
              <FaTwitter style={{ marginRight: '.5rem' }} />
              Login with Twitter
            </Button>
            <Button variant="light" style={{ margin: '.5rem' }}>
              <FaLinkedin style={{ marginRight: '.5rem' }} />
              Login with LinkedIn
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
  }

  export default LoginPage; 