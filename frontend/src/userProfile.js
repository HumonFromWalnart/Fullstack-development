import { useContext, useState } from "react";
import { UserData } from "./mainSource";
import './userProfile.css'

export const UserProfile = () => {

    const { data } = useContext(UserData);

    return (

        <div className="BigBoiContainer">
            {
                data.map((cur) => {
                    return (
                        <div className="BigContainer">
                            <div className="hiddenContainer">
                            <div className="fullName">
                                <div id="firstName">{cur.firstName}</div>
                                <div id="lastName">{cur.lastName}</div>
                            </div>
                            <img src={cur.picture} id="picture"></img>
                            <div>{cur.line}</div>
                            <a href={cur.email}>More about me</a>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}