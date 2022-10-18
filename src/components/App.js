import React, { Component, useState } from "react";
import '../styles/App.css';

const App = () => {
  const [getForm, setGetForm] = useState({
    name: '',
    email: '',
    gender: 'male',
    phoneNumber: '',
    password: ''
  })
  const [error,setError] = useState("");
  const[username,setUsername] = useState('');
  const onChangeHandler = (event) => {
    setGetForm({
      ...getForm,
      [event.target.name]: event.target.value
    })
  }
  const errorhadler = () =>{
    if(!getForm.name && !getForm.email && !getForm.phoneNumber && !getForm.password){
      setError('All fields are mandatory');
      return true;
    }
    if(!getForm.name){
      setError('Name Error');
      return true;
    }
    
    if(!getForm.email){
      setError('Email Error');
      return true;
    }
    if(!getForm.phoneNumber){
      setError('Phone Number Error');
      return true;
    }
    if(!getForm.password){
      setError('Password Error');
      return true;
    }
    if(!/^[a-zA-Z\s]*[0-9\s]*$/.test(getForm.name)){
      setError('Name is not alphanumeric');
      return true;
    }
    if(!(getForm.email).includes("@")){
      setError('Email must contain @');
      return true;
    }
    if(!/^(male|female|others)$/.test(getForm.gender)){
      setError('Please identify as male, female or others');
      return true;
    }
    if(!/^[0-9]{10}$/.test(getForm.phoneNumber)){
      setError('Phone Number must contain only numbers');
      return true;
    }
    if((getForm.password).length<6){
      setError('Password must contain atleast 6 letters');
      return true;
    }
    
    return false;
  }
  const clearForm = () =>{
    setGetForm({
    name: '',
    email: '',
    gender: 'male',
    phoneNumber: '',
    password: ''
    })
  }
  const onSubmitHandler = (e)=>{
    setError('');
    setUsername('');
    e.preventDefault();
    if(errorhadler()){
      return true;
    }
    let userName = getForm.email.split('@')[0];
    setUsername ('Hello '+userName);
    clearForm();
  }
  return (
    <div id="main">
        <h1>Form</h1>
      <form >
        <div className="field">
          Name | <input onChange={onChangeHandler} value={getForm.name} data-testid='name' type="text" placeholder="Name.." name="name" />
        </div>
        <div className="field">
          Email | <input onChange={onChangeHandler} value={getForm.email} type="email" name="email" id="email" placeholder="Email" data-testid='email' />
        </div>
        <div className="field">
          Gender | <select  onChange={onChangeHandler} value={getForm.gender} data-testid='gender' name="gender" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="field">
          Phone Number | <input onChange={onChangeHandler} value={getForm.phoneNumber} data-testid='phoneNumber' type="number" name="phoneNumber" id="phoneNumber"  placeholder="Phone Number Here.." />
        </div>
        <div className="field">
          Password | <input onChange={onChangeHandler} value={getForm.password} type="password" name="password" id="password" placeholder="Password..." data-testid='password' />
        </div>
        <button onClick={onSubmitHandler} data-testid='submit' type="submit"> Submit button </button>
        {error}
       <h1 className="user"> {error==false?username:''}</h1>
      </form>
    </div>
  )
}


export default App;
