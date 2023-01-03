import axios from "axios";
import { useEffect, useState } from "react";
import './signUp.css'
import SubmitButton from "./submitButton";
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
    const [lockerKey, setLockerKey] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const createUser = async () => {
        const user = await axios.post('http://localhost:6942/login', { email, lockerKey});
        console.log(user)
        if (user !== undefined) {
            navigate('/LoadingScreen')
        }
    }


    // const item = localStorage.getItem('lockerKey', JSON.stringify(lockerKey));

    useEffect(() => {
        localStorage.setItem('nothing', JSON.stringify(lockerKey));
    }, [lockerKey])


    return (
        <div className="bigBoiContainer">
            <div className="inputContainer">
                <input placeholder="Email address" type={'email'} id="input" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <input placeholder="Your locker key password" type={'password'} id="input" onChange={(e) => setLockerKey(e.target.value)} value={lockerKey}></input>
            </div>
            <div>
                <SubmitButton onClick={createUser} />
            </div>

            {/* {
                  lockerKey == "wrong" && 
                <div className="YOUTHIEF">
                    <div className="YOUBLOODYTHIEF">YOU BLOODY THEIF</div>
                </div>

            } */}
        </div>
    );
}