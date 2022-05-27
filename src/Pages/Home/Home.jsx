
import JoinImg from '../../Images/jointeamremovebg.png'
import './home.css'

export default function Home(){

   
    return (
        <div className="homescreen">
            <div className="homescreenWrapper">
                <div className="hs1">
                    <div className="hs1Wrapper">
                        <h1>Welcome to POSTJOB</h1>
                        
                        <h2>Best platform for recruiter.</h2>
                        <button >Create Post</button>
                    </div>
                </div>
                <div className="hs2">
                <img src={JoinImg} alt="" />
                </div>
            </div>
        </div>
    )
}