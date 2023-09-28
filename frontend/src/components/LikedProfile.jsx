import axios from "axios";
import { useState } from "react"

 function LikedProfile(prop){
    const [pics,setPics] = useState([null]);
    let pic = "http://localhost:3004/images/";
    async function getPic(){
          if(pics[0] == null){
         await axios.get("http://localhost:3004/getImage").then(data => setPics(data.data)).catch(err=>console.log(err))
    }  
    pics.forEach(e => {
       if(e.username == prop.username && e.index == 0){
        pic += e.image;
        console.log(pic);
       }
    });
    }
getPic();
    return <div id="LikedProfile">
        <img src={pic} alt="" />
        <h1>{prop.username}</h1>
        <p></p>
        </div>
}

export default LikedProfile