import { useState } from "react";
import { Route, Routes,useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import axios from "axios";

function RegisterPage(){
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [filename,setFilename] = useState("penis");
    const [tags,setTags] = useState({"height": null,"gender": "man","age": null, "tag_1": null, "tag_2": null, "tag_3": null, "searchTag": null});
    const [likes,setLikes] = useState(0);
    const handeSubmit = (e)=>{
        axios.post("http://localhost:3004/register", {username,password,filename,likes,height:0,gender:"man",age:0,tag_1:null,tag_2:null,tag_3:null,searchTag: null}).then(result=>console.log(result))
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
            <label htmlFor="">Username <input required type="text" onChange={e => setUsername(e.target.value)} /></label>
            
            <label htmlFor="">Password <input required type="password" onChange={e => setPassword(e.target.value)}/></label>

            <label htmlFor="">Confirm Password <input  required type="password" /></label>
            
            <button type="submit">Create Account</button>
        </form>
        <button className="register" onClick={toLogin}>Go to Login</button>
        </div>
    </div>
}
export default RegisterPage;