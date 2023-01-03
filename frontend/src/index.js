import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LogIn } from './logIn.js';
// import { UserProfile } from './userProfile.js
import Source from './mainSource.js';
import { SignUp } from './signUp.js';
import { UserProfile } from './userProfile.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Source>
                <Routes>
                    <Route path={'/signUp'} element={<SignUp />} />
                    <Route path={'/logIn'} element={<LogIn />} />
                    <Route path={'/LoadingScreen'} element={<UserProfile />} />
                </Routes>
            </Source>

        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
