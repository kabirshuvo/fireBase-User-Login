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