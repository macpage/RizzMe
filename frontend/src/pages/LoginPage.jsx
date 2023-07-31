import { useState } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RegisterPage from "./RegisterPage";
function LoginPage(){
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const handeSubmit = (e)=>{

    }
    const navigate = useNavigate();
    const toRegister=()=>{
        navigate("/RegisterPage")
    }
    return <div id="LoginPage">
          <Routes>
          <Route path="/RegisterPage" element={<RegisterPage></RegisterPage>} />
        </Routes>
                    <div className="background">
           <h1><span className="highlight2">Log</span>in</h1> 
            <form onSubmit={handeSubmit}>
            <label htmlFor="">Username <input type="text" /></label>
            
            <label htmlFor="">Password <input type="password" /></label>
            
            <button type="submit">Login</button>
        </form>
        <button className="register" onClick={toRegister}>Register!</button>
        </div>
 


        
    </div>
}

export default LoginPage;