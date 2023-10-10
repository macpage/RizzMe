import axios from "axios";
import { useState } from "react";
import LikedProfile from "../components/LikedProfile";

function LikePage(prop){

const [liked,setLiked] = useState([null]);
const [likes,setLikes] = useState([null]);
const [imgs,setImgs] = useState([null]);

const [showLikes,setShowLikes] = useState();


async function getLikes(){
  if(liked[0] == null){
   await axios.get("http://localhost:3004/updateLiked", {params:{username: prop.username}}).then(data => {setLiked(data.data.liked)} ).catch(err=>console.log(err))
   
    }
}
getLikes();

window.addEventListener("DOMContentLoaded", ()=>{
likeHandler();
})

function likeHandler(){
  const showLikedBy = document.querySelector("#LikedBy");
const showLiked = document.querySelector("#Liked");

  console.log(showLikedBy)
  console.log(showLiked);
if(showLikes){
  showLikedBy.style.display = "grid";
  showLiked.style.display = "none";
  console.log("its true");
}else{
  showLikedBy.style.display = "none";
  showLiked.style.display = "grid";
  console.log("its false");
}


}
    return <div id="LikePage">
      <button onClick={() => setShowLikes(false)}>Likes you Got</button>
      <button onClick={() => setShowLikes(true)}>Users you Liked</button>
       <div id="Liked">

        {liked.map((e,i)=> <LikedProfile key={i} username={e}></LikedProfile>)}
       </div>
      
      <div id="LikedBy"></div>
    </div>
  
}

export default LikePage;