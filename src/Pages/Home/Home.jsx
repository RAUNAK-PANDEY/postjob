
import React from 'react';
import JoinImg from '../../Images/jointeamremovebg.png'
import './home.css'
import { useNavigate } from 'react-router-dom';
export default function Home(){

    const navigate = useNavigate();
   

    return (
        <div className="homescreen">
            <div className="homescreenWrapper">
                <div className="hs1">
                    <div className="hs1Wrapper">
                        <h1>Welcome to POSTJOB</h1>
                        
                        <h2>Best platform for recruiter.</h2>
                        <button onClick={() => navigate('/createpost')}>Create Post</button>
                    </div>
                </div>
                <div className="hs2">
                <img src={JoinImg} alt="" />
                </div>
            </div>
        </div>
    )
}