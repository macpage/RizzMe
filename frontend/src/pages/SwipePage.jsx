import { useState } from "react";
import SwipeProfile from "../components/SwipeProfile";
import axios from "axios";
import EmptyPage from "./EmptyPage";
function SwipePage(prop){
    const [profiles,setProfiles] = useState([]);
let profileArr = [];
let [liked,setLiked] = useState("empty");
const [trash,setTrash] = useState([]);
const [counter,setCounter] = useState(0);
const empty = document.querySelector("#EmptyPage");
const [sp,setSp] = useState();

async function findUser(){
    let username = prop.username;
    await axios.post("http://localhost:3004/user" , {username}).then(res=> console.log(res));
    console.log("yoooo")
}

loadProfiles();
    async function loadProfiles(){
        
        if(profiles.length<1){
                await axios.get("http://localhost:3004/getInfos" ,{params:{username: prop.username}}).then(res => { setProfiles(res.data)});
                profileArr = profiles;
            


            }

        profileArr = profiles;
       
     profileArr.forEach((e,index) => {
        
        if(e.username == prop.username){
          

           delete profileArr[index];
        
        }
     });
      
     

        const profs = document.querySelectorAll("#SwipeProfile");
       
        profs.forEach((e,index) => {
            if(index == counter){
               e.style.display = "flex";
               
            }else{
                e.style.display = "none";
            }
          
        });
        
    }

   async function filterLiked(){
    //await axios.get("http://localhost:3004/getLiked" ,{params: {username: prop.username}}).then(res=>(liked = res.data.liked));
    await axios.get("http://localhost:3004/checkLike").then(res=> liked = res.data);
   
  
        const profs = document.querySelectorAll("#SwipeProfile");
        profs.forEach((e,index) => {
            if(index == counter){
               e.style.display = "flex";
               
            }else{
                e.style.display = "none";
            }

          liked.forEach(l => {
            console.log(l.likedUserID)
            console.log(e.firstChild.childNodes[1].innerHTML)
          })
    
           
        });

        setSp(document.querySelector("#SwipeProfile"));
        if(sp){
            
            empty.style.display = "none";
           }else{
            empty.style.display = "block";
           }
    }

    function dislike(profile){
        profileArr.forEach(e=>{
           
                console.log("in the trash can " + profile)
                profileArr.forEach(e=>{
                    if(e.username == profile){
                        console.log("in the trash can " + profile);
                        console.log(e);
                        setTrash(e);
                        
                    }
                })

           
        })
        if(counter+2 == profileArr.length){
            setCounter(0);
        }else{
         setCounter(counter+1);   
        }

        
    }

   async function like(profile){
        profileArr.forEach(e=>{
           
                console.log("in the trash can " + profile)
                if(e.username == profile){
                    console.log("in the like can " + profile);

                    liked.push(e._id)
                    
                }
                console.log("like");
                console.log(liked);
           
        })

        if(counter+2 == profileArr.length){
            setCounter(0);
        }else{
         setCounter(counter+1);   
        }

        let username = prop.username;
        await axios.post("http://localhost:3004/addLike", {username,liked}).catch(err=>console.log(err));
      
    }

    function swipeBack(){
       
        if(counter==0){
            setCounter(profileArr.length-2);
            console.log("broo")
        }else{
            setCounter(counter-1);
        }
    }
    
    return <div id="SwipePage">
      { profileArr.map(profs => <SwipeProfile id={counter} filterLiked={filterLiked} swipeBack={swipeBack} like={like} dislike={dislike} username={profs.username} key={profs._id}> </SwipeProfile>)}
      <EmptyPage></EmptyPage>
    </div>
}

export default SwipePage;