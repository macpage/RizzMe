import axios from "axios";
import { useState } from "react";
import LikedProfile from "../components/LikedProfile";




function LikePage(prop){

const [liked,setLiked] = useState([null]);
const [likes,setLikes] = useState([null]);
const [imgs,setImgs] = useState([null]);

const [showLikes,setShowLikes] = useState();

let isloaded = false;
let showLikedBy;
let showLiked ; 
async function getLikes(){
  if(liked[0] == null){
   await axios.get("http://localhost:3004/updateLiked", {params:{username: prop.username}}).then(data => {setLiked(data.data.liked)} ).catch(err=>console.log(err))
   
    }
}
getLikes();
console.log(isloaded)

window.addEventListener("DOMContentLoaded", ()=>{
  likeHandler();
  
})

if(isloaded){
  console.log("heyo")
  console.log(showLiked);
}

function likeHandler(){
  isloaded = true;
   showLikedBy = document.querySelector("#LikedBy");
showLiked = document.querySelector("#Liked");

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

function change(show){
  console.log("changed");
  console.log(show);
  showLikedBy = document.querySelector("#LikedBy");
  showLiked = document.querySelector("#Liked");
  if(!show){
    showLikedBy.style.display = "grid";
    showLiked.style.display = "none";
  }else{
    showLikedBy.style.display = "none";
    showLiked.style.display = "grid";
  }

}
    return <div id="LikePage">
      <button onClick={() =>  change(false)}>Likes you Got</button>
      <button onClick={() => change(true)}>Users you Liked</button>
       <div id="Liked">

        {liked.map((e,i)=> <LikedProfile key={i} username={e}></LikedProfile>)}
       </div>
      
      <div id="LikedBy"></div>
    </div>
  
}

export default LikePage;