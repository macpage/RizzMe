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
   
    }
}
getLikes();


function change(show,b){
  console.log("changed");
  console.log(show);
  showLikedBy = document.querySelector("#LikedBy");
  showLiked = document.querySelector("#Liked");
  if(!show){
    showLikedBy.style.display = "grid";
    showLiked.style.display = "none";
    b.style.backgroundColor = "#9038fb";
   
  }else{
    showLikedBy.style.display = "none";
    showLiked.style.display = "grid";
  }

}
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