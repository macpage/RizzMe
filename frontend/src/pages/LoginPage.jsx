import { useState } from "react";

function LoginPage(){
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const handeSubmit = (e)=>{

    }
    return <div id="LoginPage">
        <h1><span className="highlight2">Log</span>in</h1>
        <form onSubmit={handeSubmit}>
            <label htmlFor="">Username</label>
            <input type="text" />
            <label htmlFor="">Password</label>
            <input type="password" />
            <button type="submit">Login</button>
        </form>
        
    </div>
}

export default LoginPage;