import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { useNavigate, Link } from "react-router-dom";
import * as Components from "./Signupcomponent";
import "./Signup.css";

import axios from "axios";

function Signup() {
    const history = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:4000/signupd", {
                name,email,password
            })
            .then(res => {
                if (res.data==="exist") {
                    alert("User already exist");

                }
                else if (res.data==="notexist") {
                    history("/homed",{state:{id:email}})
                }
            })
            .catch(e => {
                alert("Wrong Details");
                console.log(e);
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    const [signUp] = React.useState(true);
    return (
        <div className='Sign'>
            <center>
        <Components.Container>
            <Components.SignInContainer signingIn={signUp}>
                <Components.Form action="POST">
                    <Components.Title>Sign Up</Components.Title>
                    <Components.Input type="text" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
                    <Components.Input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                    <Components.Input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                    
                    <Components.Button onClick={submit}>Sign up</Components.Button>
                </Components.Form>
            </Components.SignInContainer>
            <Components.OverlayContainer signingIn={signUp}>
                <Components.Overlay signingIn={signUp}>
                    <Components.RightOverlayPanel signingIn={signUp}>
                        <Components.Title>Welcome Back!</Components.Title>
                        <Components.Paragraph>
                            To keep connected with us please login with your personal info
                        </Components.Paragraph>
                        <Components.GhostButton >
                            <Link to="/signind">Sign In</Link>
                        </Components.GhostButton>
                    </Components.RightOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>
        </Components.Container>
        </center>
        </div>
    );
}

export default Signup;