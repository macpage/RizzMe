import { useState } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import axios from "axios";
function LoginPage(){
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3004/login",{username,password}).then(result=> {console.log(result)
        if(result.data === "login!!!"){
            navigate("/RegisterPage");
        }
    })
     
        
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
            <form onSubmit={handleSubmit}>
            <label htmlFor="">Username <input type="text" onChange={e => setUsername(e.target.value)}/></label>
            
            <label htmlFor="">Password <input type="password" onChange={e => setPassword(e.target.value)} /></label>
            
            <button type="submit">Login</button>
        </form>
        <button className="register" onClick={toRegister}>Register!</button>
        </div>
 


        
    </div>
}

export default LoginPage;