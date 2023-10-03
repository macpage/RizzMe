import axios from "axios";
import { useState } from "react";
import LikedProfile from "../components/LikedProfile";

function LikePage(prop){

const [liked,setLiked] = useState([null]);
const [likes,setLikes] = useState([null]);
const [imgs,setImgs] = useState([null]);

async function getLikes(){
  if(liked[0] == null){
   await axios.get("http://localhost:3004/updateLiked", {params:{username: prop.username}}).then(data => {setLiked(data.data.liked)} ).catch(err=>console.log(err))
  
    }
}
getLikes();
    return <div id="LikePage">
      <button>Likes</button>
      <button>Users you Liked</button>
       <div id="Liked">

        {liked.map((e,i)=> <LikedProfile key={i} username={e}></LikedProfile>)}
       </div>
      
      <div id="LikedBy"></div>
    </div>
  
}

export default LikePage;