
import axios from "axios";
import { useState } from "react";

function SwipeProfile(prop){
const [profiles,setProfiles] = useState([]);
let profileArr = [];
const [bro,setBro] = useState();
let pics;
let newPics = [];
const [swipeName,setSwipeName] = useState()    

const [imgText,setImgText] = useState(null);

const [notFound,setNotFound] = useState(true);

async function loadImages(){
    await  axios.get("http://localhost:3004/getImage").then(res=>{pics = res.data});

pics.forEach(e => {
    
    if(e.username == prop.username){
        newPics.push(e);
        setNotFound(false);
        setSwipeName(e.username);
    }


});


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

     profileArr.forEach((e,index) => {
        
     if(e.username == prop.username){
       
      
        if(bro==null){
            setBro(e); 
        }
       
     }
        
     });

    
    }
    
    loadProfiles();
    const [pic,setPic] = useState([null,null,null,null,null,null]);
    const [show,setShow] = useState();
    const switchPics = e =>{
       let pic = document.querySelectorAll(".SwipePic");
      
       
       console.log(prop.id)
       pic[prop.id].src = "http://localhost:3004/images/"+e.image
    }

    const activateRizz = event => {
        setShow("flex");
    }
    const deactivateRizz = event => {
        //
      
        document.querySelector(".rizzText").classList.add("closing");
        setTimeout(() => {
            document.querySelector(".rizzText").classList.remove("closing");
          setShow("none");  
        }, 400);
    }
    return <div id="SwipeProfile">
 <div id="SwipeIntro">
<img className="SwipePic" src={pic[0] ? "http://localhost:3004/images/"+pic[0].image : null}  alt="" />
<h1 id="SwipeName">{swipeName}</h1>
<div id="SwipeButtons">
    <button onClick={prop.swipeBack}><img src="src/assets/SwipeBack.png" alt="" /></button>
    <button onClick={()=>prop.dislike(prop.username)}><img src="src/assets/Trash.png" alt=""  /></button>
</div>
 </div>
 <div id="SwipeInfo">
 <div className="pics">

{pic.map((e,index) =>   <img onClick={()=> switchPics(e)} key={index} src={pic[0] ? "http://localhost:3004/images/"+e.image : null} alt=""/>)}
 </div>
            <div className="info">
            <div className="personal">
                <ul>
                    <li>{bro ? bro.height : "yes"}</li>
                    <li>{bro ? bro.gender : "yes"}</li>
                    <li>{bro ? bro.age : "yes"}</li>
                </ul>
            </div>
            <div className="interest">
            <ul>
<li>{bro ? bro.tag_1 : "yes"}</li>
<li>{bro ? bro.tag_2 : "yes"}</li>
<li>{bro ? bro.tag_3 : "yes"}</li>
                </ul>
            </div>
            <div className="searchingFor">
            <ul>
                    <li>Searching for:</li>
                    <li>{bro ? bro.searchTag : "yes"}</li>
                </ul>
            </div>
 </div>

    </div>
    </div>
}

export default SwipeProfile;