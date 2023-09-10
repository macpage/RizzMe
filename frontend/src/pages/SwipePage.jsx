import { useState } from "react";
import SwipeProfile from "../components/SwipeProfile";
import axios from "axios";
function SwipePage(prop){
    const [profiles,setProfiles] = useState([]);
let profileArr = [];

loadProfiles();

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
    return <div id="SwipePage">
       <SwipeProfile style={{display: "none"}}> </SwipeProfile>
       
    </div>
}

export default SwipePage;