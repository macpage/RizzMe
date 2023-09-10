
import axios from "axios";
import { useState } from "react";

function SwipeProfile(prop){
const [profiles,setProfiles] = useState([]);
let profileArr = [];
let pics;
let newPics = [];
    console.log("my userame: " + prop.username);

const [imgText,setImgText] = useState(null);

const [notFound,setNotFound] = useState(true);

async function loadImages(){
    await  axios.get("http://localhost:3004/getImage").then(res=>{pics = res.data});

pics.forEach(e => {
    
    if(e.username == prop.username){
        console.log(e);
        newPics.push(e);
        setNotFound(false);
    }


});

console.log(newPics);
console.log(pic);
console.log(pic.length);

if(pic[0] == null && !notFound){
    setPic(newPics);
 
}

}



    async function loadProfiles(){
        if(profiles.length<1){
                await axios.get("http://localhost:3004/getInfos" ,{params:{username: prop.username}}).then(res => { setProfiles(res.data)});
                profileArr = profiles;
        }
   loadImages();
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
    const [pic,setPic] = useState([null,null,null,null,null,null]);
    const [show,setShow] = useState();
    const handleClick = event =>{
       
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
<img className="SwipePic" src={pic[0] ? "http://localhost:3004/images/"+pic[0].image : null}  alt="" />
<h1 id="SwipeName">{prop.username}</h1>
 </div>
 <div id="SwipeInfo">
 <div className="pics">
    {console.log(newPics.length)}
    {console.log("newpics")}
{pic.map((e,index) =>   <img key={index} src={pic[0] ? "http://localhost:3004/images/"+e.image : null} alt=""/>)}
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