import { useState } from "react";
import { Route, Routes,useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";

function RegisterPage(){
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const handeSubmit = (e)=>{

    }
    const navigate = useNavigate();
    const toLogin=()=>{
        navigate("/")
    }
    return <div id="RegisterPage">
         <Routes>
          <Route path="/LoginPage" element={<LoginPage></LoginPage>} />
        </Routes>
                    <div className="background">
           <h1><span className="highlight2">Re</span>gister</h1> 
            <form onSubmit={handeSubmit}>
            <label htmlFor="">Username <input type="text" /></label>
            
            <label htmlFor="">Password <input type="password" /></label>

            <label htmlFor="">Confirm Password <input type="password" /></label>
            
            <button type="submit">Create Account</button>
        </form>
        <button className="register" onClick={toLogin}>Go to Login!</button>
        </div>
    </div>
}
export default RegisterPage;