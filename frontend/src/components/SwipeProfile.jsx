
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

{profileArr.map(e=><p key={e._id}>{e.username}</p>)}
 </div>
 <div id="SwipeInfo"></div>

    </div>
}

export default SwipeProfile;