import axios from "axios";
import { useEffect, useState } from "react";
import TagWindow from "../components/TagWindow";
import SearchInfo from "../components/SearchInfo";
function AccountPage(prop){
    const [img,setImg] = useState();
    const [pic,setPic] = useState([]);
    const [bro,setBro] = useState(null);
   const [counter,setCounter] = useState(0);
    console.log("broo: " +img);
   const [name,setName] = useState("plss");
   const [tags,setTags] = useState({"height": null,"gender": "man","age": null, "tag_1": null, "tag_2": null, "tag_3": null, "searchTag": null});
   const [likes,setLikes] = useState();

   const [tagButton,setTagButton] = useState();
  
    console.log("yooo"+prop.username);
    console.log(pic);
    console.log(pic[0]);
    loadImage();
    function handleImage(i,e){
        
        console.log("xdd " + e.target.files[0]);
       async function uploadImage(){
      
        console.log("hellooo  "+ i)
const formData = new FormData();

console.log(e.target.files[0]);
console.log(img);
formData.append("file",e.target.files[0]);
formData.append("name",prop.username);
formData.append("index",i);
console.log(formData);

await axios.post("http://localhost:3004/upload",formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then(res=>console.log(res)).catch(err=>console.log(err,img));
console.log("imggg");

showImage(i,loadAgain);

        }
deleteImage(i,uploadImage);

    }

    async function loadImage(){
        let lol;
        await  axios.get("http://localhost:3004/getImage").then(res=>{lol=res.data});
       
        lol.forEach(e => {
          if(e.index == counter && e.username == prop.username){
          
            if(!pic[counter]){
              setPic(arr=> [...arr.slice(0,counter),e.image]);  
            setCounter(counter+1);
            console.log("sajdklfjödsjlfjkösdk");
            }
           console.log(counter);
           //
            console.log(e);
            

          }else{
             // console.log("didnt work: " + e.username);
          }
        });
             console.log("time to show");
    }
    
  async  function showImage(i,cb){
 
       //axios.delete("http://localhost:3004/getImage/").then(response => {
      //  console.log(response)}).catch(err=> console.log(err));
     if(await axios.get("http://localhost:3004/getImage").then(res=>{console.log("new: " + res.data[res.data.length-1].image ),setPic(arr=> [...arr.slice(0,i),res.data[res.data.length-1].image,...arr.slice(i+1)])}).then(console.log("new array:")).catch(err => console.log(err)) ) {
                console.log("your " +pic.length);
  
        console.log(pic[0]);
        console.log("sdafnllksadf");
     }

      cb();
    }

    function loadAgain(){

     console.log("updated imgs: " + pic[0]);   
    }

async function deleteImage(i,callback){
    console.log("time to delete: " + pic);
    let toDelete = pic[i];
    delete pic[i];
    console.log("time to delete: " + pic[i]);
  
          await axios.get("http://localhost:3004/deleteImage",{params:{name: prop.username, index:i,pic: toDelete}}).then(res=>console.log(res));
   console.log(" deleted");
   callback();
    
    //await axios.get("http://localhost:3004/deletePic",{params:{pic: pic[i]}});
 
}


function showTagWindow(e){
const tw = document.querySelector("#TagWindow");

if(tw.style.display =="block"){
    tw.style.display = "none";
}else{
    tw.style.display = "block";
}
setTagButton(e);
}

function showSearchWindow(e){
    const search = document.querySelector("#SearchInfo");
    if(search.style.display =="flex"){
        search.style.display = "none";
    }else{
        search.style.display = "flex";
    }
    console.log("sdfhjksd")
}

function editProfile(){
    const b = document.querySelector("#EditButton");
    
    if(b.innerHTML == "Save Profile"){
        b.innerHTML = "Edit Profile";
        updateInfo();
    }else{
      b.innerHTML = "Save Profile";  
    }
    console.log(tags);
}

function updateTags(e,b){
   
    if(b == "tag_1"){
        tags.tag_1 = e;
    }
    if(b == "tag_2"){
        tags.tag_2 = e;
    }
    if(b == "tag_3"){
        tags.tag_3 = e;
    }
    
}


function updateSearchTag(e){
tags.searchTag = e;
}

function updateInfo(){
    axios.get("http://localhost:3004/updateInfo", {params:{name: prop.username,height:tags.height,gender:tags.gender,age:tags.age,tag_1:tags.tag_1,tag_2:tags.tag_2,tag_3:tags.tag_3,searchTag: tags.searchTag}})
console.log("updated");
}


    return <div id="AccountPage">
        <div id="AccountIntro">
            
           
            <button id="ProfileButton"> <input type="file" name="img" onChange={e=>handleImage(0,e)}/><img src={"http://localhost:3004/images/"+pic[0]} alt=""/> </button>
        
            <h1>{prop.username}</h1>
            <button id="EditButton" onClick={editProfile}>Edit Profile</button>
            <div id="likes"><img src="src/assets/heart.png" alt=""/>
            <p>0</p>
            </div>
        </div>
        <div id="AccountInfo">
            <div className="pics">
            <button> <input type="file" name="img" onChange={e=>handleImage(0,e)}/><img src={"http://localhost:3004/images/"+pic[0]} alt=""/> </button>
            <button> <input type="file" name="img" onChange={e=>handleImage(1,e)}/><img src={"http://localhost:3004/images/"+pic[1]} alt=""/> </button>
            <button> <input type="file" name="img" onChange={e=>handleImage(2,e)}/><img src={"http://localhost:3004/images/"+pic[2]} alt=""/> </button>
            <button> <input type="file" name="img" onChange={e=>handleImage(3,e)}/><img src={"http://localhost:3004/images/"+pic[3]} alt=""/> </button>
            <button> <input type="file" name="img" onChange={e=>handleImage(4,e)}/><img src={"http://localhost:3004/images/"+pic[4]} alt=""/> </button>
            <button> <input type="file" name="img" onChange={e=>handleImage(5,e)}/><img src={"http://localhost:3004/images/"+pic[5]} alt=""/> </button>
            </div>
            <div className="info">
            <div className="personal">
                <ul>
                    <li>cm<input type="text" placeholder="height" onChange={e=> tags.height = e.target.value}  /></li>
                    <li><select name="gender" id="gender" placeholder="gender" onChange={e=> tags.gender = e.target.value}>
                        <option value={"man"}>man</option>
                        <option value={"woman"}>woman</option>
                       
                        </select></li>
                    <li>Years<input type="text" placeholder="age" onChange={e=> tags.age = e.target.value}  /></li>
                </ul>
            </div>
            <div className="interest">
            <ul>
                    <button className="tagButton" onClick={e=> showTagWindow(e.target.value)} onChange={e=> tags.tag_1 = e.target.value} value={"tag_1"}>click me</button>
                    <button className="tagButton" onClick={e=>showTagWindow(e.target.value)} onChange={e=> tags.tag_2 = e.target.value} value={"tag_2"}>click me</button>
                    <button className="tagButton" onClick={e=>showTagWindow(e.target.value)} onChange={e=> tags.tag_3 = e.target.value} value={"tag_3"}>click me</button>
                </ul>
            </div>
            <div className="searchingFor">
            <ul>
                    <li>Searching for:</li>
                    <button id="searchTag" onClick={e=>showSearchWindow(e.target.value)} onChange={e => tags.searchTag = e.target.value} value={"lo"}>click me</button>
                </ul>
            </div>
        </div>
        <TagWindow bro={tagButton} update={updateTags}></TagWindow>
        <SearchInfo update={updateSearchTag}></SearchInfo>
        </div>
    </div>
}
export default AccountPage;