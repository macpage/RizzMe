import { useEffect, useState } from "react";
import SwipeProfile from "../components/SwipeProfile";
import axios from "axios";
import EmptyPage from "./EmptyPage";
import {useQuery} from "react-query";
function SwipePage(prop){
    const [profiles,setProfiles] = useState([]);
let profileArr = [];
let [liked,setLiked] = useState("empty");
let [userList,setUserList] = useState([]);
const [trash,setTrash] = useState([]);
const [counter,setCounter] = useState(0);
const empty = document.querySelector("#EmptyPage");




   async function filterLiked(){
    //await axios.get("http://localhost:3004/getLiked" ,{params: {username: prop.username}}).then(res=>(liked = res.data.liked));
    await axios.get("http://localhost:3004/checkLike").then(res=> liked = res.data);
    if(userList.length<1){
        console.log("emoty")
        await axios.get("http://localhost:3004/Users").then(res=>userList=res.data)
        profileArr = userList;
    }



    }

    const fetchUsers = async () => {
        const response =   await axios.get("http://localhost:3004/Users");
        const liked = await axios.get("http://localhost:3004/checkLike");

       setUserList(response.data);
       setProfiles(response.data)
       console.log("yoooo");
       console.log(profiles);
       setProfiles(old => old.filter(i => i.username !== prop.username))
        response.data.forEach((e) => {
            liked.data.forEach(l => {
               
                if(e._id == l.likedUserID){
                    console.log("broo")
                    setProfiles(old => old.filter(i => i !== e))
                }
            });
            
          
        });

        console.log("new");
        console.log(profiles);
        return response.data;
    }

    useEffect(()=>{
        fetchUsers();
   
    },[])

    function showProfiles(){
        const profiles = document.querySelectorAll("#SwipeProfile");
        profiles.forEach((e,index) => {
           // console.log(e.firstChild.childNodes[1]);
            
            if(index == counter){
              e.style.display = "flex";  
              console.log()
            }
        });
        
    }
showProfiles();


    //filterLiked();

    function dislike(profile){
        const profiles = document.querySelectorAll("#SwipeProfile");
        profiles.forEach(e=>{
           
                console.log("in the trash can " + profile)
              
                    if(e.username == profile){
                        console.log("in the trash can " + profile);
                        console.log(e);
                        setTrash(e);
                        
                    }
              e.style.display = "none";
              console.log("counter: " +counter)

           
        })
        if(counter+1 == profiles.length){
            setCounter(0);
        }else{
         setCounter(counter+1);   
        }

        
    }

   async function like(profile){
    let likedID;
        userList.forEach(e=>{
           console.log(e.username)
                console.log("in the trash can " + profile)
                if(e.username == profile){
                    console.log("in the like can " + profile);

                    likedID = e._id;
                    
                }
                console.log("like");
                console.log(liked);

                e.style.display = "none";
           
        })
        
        if(counter+1 == profiles.length){
            setCounter(0);
        }else{
         setCounter(counter+1);   
        }

        let username = prop.username;
        console.log(username);
        await axios.post("http://localhost:3004/addLike", {username,likedID}).catch(err=>console.log(err));
      
    }

    function swipeBack(){
        const profiles = document.querySelectorAll("#SwipeProfile");
        if(counter>0){
              setCounter(counter-1);
                 profiles.forEach(e=>{
           
        
        

       
    })    
        }
    }

    const { isLoading, error, data } = useQuery('posts', fetchUsers);
    if (isLoading) return 'Loading...'; // Wenn die Daten noch geladen werden
    if (error) return 'An error has occurred: ' + error.message; // Wenn ein Fehler aufgetreten ist
    return <div id="SwipePage">
      { profiles.map(profs => <SwipeProfile id={counter} swipeBack={swipeBack} like={like} dislike={dislike} username={profs.username} key={profs._id}> </SwipeProfile>)}
      <EmptyPage></EmptyPage>
    </div>
}

export default SwipePage;