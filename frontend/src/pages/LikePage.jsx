import axios from "axios";
import { useState } from "react";
import LikedProfile from "../components/LikedProfile";




function LikePage(prop){

const [liked,setLiked] = useState([null]);
const [likes,setLikes] = useState([null]);
const [imgs,setImgs] = useState([null]);

const [showLikes,setShowLikes] = useState();

let showLikedBy;
let showLiked ; 
async function getLikes(){
  if(liked[0] == null){
   await axios.get("http://localhost:3004/updateLiked", {params:{username: prop.username}}).then(data => {setLiked(data.data.liked)} ).catch(err=>console.log(err))
   //lets gooooo
    }
}
getLikes();




function change(show,b){
  console.log("changed");
  console.log(show);
  showLikedBy = document.querySelector("#LikedBy");
  showLiked = document.querySelector("#Liked");
  let btn = document.querySelector("#LikeButtons").childNodes;
  console.log(btn[0]);
 
  if(!show){
    showLikedBy.style.display = "grid";
    showLiked.style.display = "none";
    btn[0].style.backgroundColor = "#9038fb";
    btn[1].style.backgroundColor = "#2a2a2a";
  }else{
    showLikedBy.style.display = "none";
    showLiked.style.display = "grid";
    btn[1].style.backgroundColor = "#9038fb";
    btn[0].style.backgroundColor = "#2a2a2a";
  }

}

document.addEventListener("DOMContentLoaded", function(){
  

  
});
    return <div id="LikePage">
      <div id="LikeButtons">
              <button onClick={(e) =>  change(false,e.target)}>Likes you Got</button>
      <button onClick={() => change(true)}>Users you Liked</button>
      </div>

       <div id="Liked">

        {liked.map((e,i)=> <LikedProfile key={i} username={e}></LikedProfile>)}
       </div>
      
      <div id="LikedBy"></div>
    </div>
  
}

export default LikePage;