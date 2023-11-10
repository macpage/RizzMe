import axios from "axios";
import { useEffect, useId, useState } from "react";
import LikedProfile from "../components/LikedProfile";




function LikePage(prop){

const [liked,setLiked] = useState([null]);
const [likes,setLikes] = useState([null]);
const [imgs,setImgs] = useState([null]);
const [ID,setID] = useState();
const [showLikes,setShowLikes] = useState();
const username = prop.username;

let showLikedBy;
let showLiked ; 

const getLikes = async () => {

  const user = await axios.get("http://localhost:3004/User/" + username).then();



 // setLikes(response);
 console.log("letsgoo");
  console.log(user.data[0]._id);
  setID(user.data[0]._id);
  console.log("looool");
  console.log(ID);

}

useEffect(()=>{
  getLikes();
},[])

useEffect(()=>{
  const getID = async ()=>{
       const response = await axios.get("http://localhost:3004/getLike/"+ID);
           
  console.log("yeaaahh");
  console.log(response)
  }

  getID();

},[ID])


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