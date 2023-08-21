import {useNavigate } from "react-router-dom";
import AccountPage from "../pages/AccountPage";
function Navbar(){
    const navigate = useNavigate();
    const toAccount=()=>{
        navigate("/AccountPage")
    }
    const toSwipePage=()=>{
        navigate("/SwipePage")
    }
    return <div id="Navbar">
                
        <button><img src="src/assets/user.png" alt="" onClick={toAccount} /></button>
        <h1 onClick={toSwipePage}><span className="highlight">rizz</span><span className="secondText">.me</span></h1>
    </div>
}

export default Navbar;