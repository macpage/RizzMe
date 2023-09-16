import { useState } from "react";
import SwipeProfile from "../components/SwipeProfile";
import axios from "axios";
function SwipePage(prop){
    const [profiles,setProfiles] = useState([]);
let profileArr = [];
let [liked,setLiked] = useState("empty");
const [trash,setTrash] = useState([]);
const [counter,setCounter] = useState(0);

loadProfiles();

    async function loadProfiles(){
        
        if(profiles.length<1){
                await axios.get("http://localhost:3004/getInfos" ,{params:{username: prop.username}}).then(res => { setProfiles(res.data)});
                profileArr = profiles;
                console.log("likesssss " + prop.username);


            }

        profileArr = profiles;
       
     profileArr.forEach((e,index) => {
        
        if(e.username == prop.username){
          

           delete profileArr[index];
        
        }
     });
      
     

        const profs = document.querySelectorAll("#SwipeProfile");
        console.log("counter_ " +counter);
        profs.forEach((e,index) => {
            if(index == counter){
               e.style.display = "flex";
               
            }else{
                e.style.display = "none";
            }
          
        });
        
    }

   async function filterLiked(){
    await axios.get("http://localhost:3004/getLiked" ,{params: {username: prop.username}}).then(res=>(liked = res.data.liked));
    console.log(liked)
    console.log("hihii")
        const profs = document.querySelectorAll("#SwipeProfile");
        profs.forEach((e,index) => {
            if(index == counter){
               e.style.display = "flex";
               
            }else{
                e.style.display = "none";
            }
            console.log(e.firstChild.childNodes[1].innerHTML)
            console.log(liked)
            liked.forEach(l=>{
                if(l==e.firstChild.childNodes[1].innerHTML){
                    e.style.display = "none";
                }
            })
        });
       
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
                console.log("trash");
                console.log(trash);
               console.log(profileArr);
           
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
                    console.log(e);
                    liked.push(e.username)
                    
                }
                console.log("like");
                console.log(liked);
           
        })

        if(counter+2 == profileArr.length){
            setCounter(0);
        }else{
         setCounter(counter+1);   
        }

       
        await axios.get("http://localhost:3004/updateLiked", {params:{username: prop.username, liked: liked}}).catch(err=>console.log(err));
      
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
       
    </div>
}

export default SwipePage;