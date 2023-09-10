
import axios from "axios";
import { useState } from "react";

function SwipeProfile(prop){
const [profiles,setProfiles] = useState([]);
let profileArr = [];

    console.log("my userame: " + prop.username);
    async function loadProfiles(){
        if(profiles.length<1){
                await axios.get("http://localhost:3004/getInfos" ,{params:{username: prop.username}}).then(res => { setProfiles(res.data)});
                profileArr = profiles;
        }

        profileArr = profiles;
        console.log("new:")
     profileArr.forEach((e,index) => {
        if(e.username == prop.username){
            console.log("index");
           console.log(index);
           delete profileArr[index];
           console.log("dsmfls");
        }
     });
      
        console.log(profileArr);
    }
    
    loadProfiles();
    const [pic,setPic] = useState("src/assets/Makima.webp");
    const [show,setShow] = useState();
    const handleClick = event =>{
        console.log(event.target.src);
        setPic(event.target.src)
    }

    const activateRizz = event => {
        setShow("flex");
    }
    const deactivateRizz = event => {
        //
        console.log(show);
        document.querySelector(".rizzText").classList.add("closing");
        setTimeout(() => {
            document.querySelector(".rizzText").classList.remove("closing");
          setShow("none");  
        }, 400);
    }
    return <div id="SwipeProfile">
 <div id="SwipeIntro">
<img className="SwipePic" src="" alt="" />
<h1 id="SwipeName">username</h1>
 </div>
 <div id="SwipeInfo">
 <div className="pics">
           <img src={"http://localhost:3004/images/"+pic[0]} alt=""/>
        <img src={"http://localhost:3004/images/"+pic[1]} alt=""/>
           <img src={"http://localhost:3004/images/"+pic[2]} alt=""/>
            <img src={"http://localhost:3004/images/"+pic[3]} alt=""/> 
           <img src={"http://localhost:3004/images/"+pic[4]} alt=""/>
           <img src={"http://localhost:3004/images/"+pic[5]} alt=""/>
            </div>
            <div className="info">
            <div className="personal">
                <ul>
                    <li>cm</li>
                    <li>woman</li>
                    <li>Years</li>
                </ul>
            </div>
            <div className="interest">
            <ul>
<li>bro</li>
<li>lol</li>
<li>xd</li>
                </ul>
            </div>
            <div className="searchingFor">
            <ul>
                    <li>Searching for:</li>
                    <li>fun</li>
                </ul>
            </div>
 </div>

    </div>
    </div>
}

export default SwipeProfile;