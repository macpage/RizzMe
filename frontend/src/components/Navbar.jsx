import {useNavigate } from "react-router-dom";
import AccountPage from "../pages/AccountPage";
function Navbar(){
    const navigate = useNavigate();
    const toAccount=()=>{
        navigate("/AccountPage")
    }
    const toLikes=()=>{
        navigate("/LikePage")
    }
    const toSwipePage=()=>{
        navigate("/SwipePage")
    }
    const toMatches=()=>{
        navigate("/Matches")
    }
    return <div id="Navbar">
                
                <div id="NavButtons">
                        <button><img src="src/assets/user.png" alt="" onClick={toAccount} /></button>
                        <button><img src="src/assets/heart.png" alt="" onClick={toLikes} /></button>   
                        <button><img src="src/assets/chat.png" alt="" onClick={toMatches} /></button>   
                </div>

        <h1 onClick={toSwipePage}><span className="highlight">rizz</span><span className="secondText">.me</span></h1>
    </div>
}

export default Navbar;