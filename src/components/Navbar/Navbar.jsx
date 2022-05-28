import './navbar.css'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

    const navigate = useNavigate();
    return (
        <div className="topbar">
            <div className="topbarWrapper" style={{cursor :"pointer"}}>
       <span className="homeLogo1" onClick={() => navigate('/')}>POST JOB</span>
                
            </div>
        </div>
    )
}