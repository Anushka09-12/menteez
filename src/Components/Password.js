import React, { useState } from 'react';
import ReactDOM from "react-dom";
import {useNavigate,Link} from "react-router-dom";
import * as Components from "./Signupcomponent";
import "./Signup.css";


import axios from "axios";


  

  function Signin() {

  const history=useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:4000/",{
        email,password
      }).then(res=>{
        if(res.data=="exist"){
          history("/home",{state:{id:email}})
        }
        else if(res.data=="notexist"){
          alert("User has not sign up");
        }
      })
      .catch(e=>{
        alert("Wrong Details");
        console.log(e);
      })
    }
    catch(e){
      console.log(e);
    }
  }
  const [signIn] = React.useState(true);
  return(
    <div className="Sign">
    <Components.Container>
        <Components.SignInContainer signingIn={signIn}>
          <Components.Form action="POST">
            <Components.Title>Change Password</Components.Title>
            <Components.Input type="email" placeholder="Password" onChange={(e) => { setEmail(e.target.value) }}/>
            <Components.Input type="password" placeholder="New Password" onChange={(e) => { setPassword(e.target.value) }}/>
            
            <Components.Button onClick={submit}>Confirm</Components.Button>
          </Components.Form>
        </Components.SignInContainer>
        <Components.OverlayContainer signingIn={signIn}>
          <Components.Overlay signingIn={signIn}>
            
            <Components.RightOverlayPanel signingIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Let Me Help You Change Your Password
              </Components.Paragraph>
              
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
      </div>
  );
    
  }


  export default Signin;