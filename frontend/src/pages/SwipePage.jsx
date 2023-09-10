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

        const profs = document.querySelectorAll("#SwipeProfile");
        console.log("lol");
        profs.forEach((e,index) => {
            if(index != 0){
               e.style.display = "none";
            }
        });
        
    }
    return <div id="SwipePage">
      { profileArr.map(profs => <SwipeProfile username={profs.username} key={profs._id}> </SwipeProfile>)}
       
    </div>
}

export default SwipePage;