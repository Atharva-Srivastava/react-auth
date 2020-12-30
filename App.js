import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase'
class App extends Component {
  constructor(){
    super();
    this.state ={
      isLogin: false,
      name: ''
    }
  }
  onSubmit = ()=>{
    var provider= new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    console.log(error);
  });
  }
  componentDidMount = ()=>{
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        this.setState = {(
          isLogin: true,
          name: displayName
        )}
      }
    })
  }
  render() {
    return (
      <div className="App">
        <div className="login-area card mx-auto mt-5">
          {this.state.isLogin=== false ? 
          <div className="card-body p-5">
          <h5 className="text-center mb-4">Login</h5>
          <button type="button" className="btn btn-primary text-white w-100">Google</button>
          <button type="button" className="btn btn-primary text-white w-100">Facebbok</button>
        </div>:
        <div className="card-media">
          <img src="https://mail.google.com/mail/u/0/#inbox/FMfcgxwKkHdxPddPQhgmNtlxzkLkgDvV?projector=1&messagePartId=0.1"/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
