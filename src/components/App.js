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
    return false;
  }
  const onSubmitHandler = (e)=>{
    setError('');
    e.preventDefault();
    if(errorhadler()){
      return true;
    }
    alert("Successfully Submitted the Form")
  }
  return (
    <div id="main">
        <h1>Form</h1>
      <form >
        <div className="field">
          Name | <input onChange={onChangeHandler} data-testid='name' type="text" placeholder="Name.." name="name" />
        </div>
        <div className="field">
          Email | <input onChange={onChangeHandler} type="email" name="email" id="email" placeholder="Email" data-testid='email' />
        </div>
        <div className="field">
          Gender | <select onChange={onChangeHandler} data-testid='gender' name="gender" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="field">
          Phone Number | <input onChange={onChangeHandler} data-testid='phoneNumber' type="number" name="phoneNumber" id="phoneNumber" placeholder="Phone Number Here.." />
        </div>
        <div className="field">
          Password | <input onChange={onChangeHandler} type="password" name="password" id="password" placeholder="Password..." data-testid='password' />
        </div>
        <button onClick={onSubmitHandler} data-testid='submit' type="submit"> Submit button </button>
        {error}
      </form>
    </div>
  )
}


export default App;
