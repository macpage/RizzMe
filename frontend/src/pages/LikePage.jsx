import axios from "axios";
import { useState } from "react";
import LikedProfile from "../components/LikedProfile";

function LikePage(prop){

const [likes,setLikes] = useState([null]);
const [imgs,setImgs] = useState([null]);

async function getLikes(){
  if(likes[0] == null){
   await axios.get("http://localhost:3004/updateLiked", {params:{username: prop.username}}).then(data => {setLikes(data.data.liked)} ).catch(err=>console.log(err))
  
    }
}
getLikes();
    return <div id="LikePage">
      {likes.map((e,i)=> <LikedProfile key={i} username={e}></LikedProfile>)}
    </div>
  
}

export default LikePage;