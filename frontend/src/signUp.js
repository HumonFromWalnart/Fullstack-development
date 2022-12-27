import axios from "axios";
import { useState } from "react";
import './signUp.css'
import SubmitButton from "./submitButton";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const createUser = async () => {
        const user = await axios.post('http://localhost:6942', { firstName, lastName, email });
        console.log(user)
        if (user !== undefined) {
            navigate('/LoadingScreen')
        }
    }

    return (
        <div className="bigBoiContainer">
            <div className="inputContainer">
                <input placeholder="First Name" type={'text'} id="input" onChange={(e) => { setFirstname(e.target.value); console.log(firstName) }} value={firstName} ></input>
                <input placeholder="Last Name" type={'text'} id="input" onChange={(e) => setLastname(e.target.value)} value={lastName}></input>
                <input placeholder="Email address" type={'email'} id="input" onChange={(e) => setEmail(e.target.value)} value={email}></input>
            </div>
            <div>
                <SubmitButton onClick={createUser} />
            </div>
        </div>
    );
}

{/* {
                data.map((cur) => {
                    return (
                        <div className="BigContainer">
                            <div className="fullName">
                                <div id="firstName">{cur.firstName}</div>
                                <div id="lastName">{cur.lastName}</div>
                            </div>
                            <img src={cur.picture} id="picture"></img>
                            <div>{cur.line}</div>
                            <a href={cur.email}>More about me</a>
                        </div>
                    );
                })
            } */}