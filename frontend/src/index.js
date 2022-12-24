import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProfile } from './userProfile.js';
import Source from './mainSource.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Source>
            <UserProfile />
        </Source>
    </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
