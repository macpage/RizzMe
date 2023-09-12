import axios from "axios";
import { useEffect, useState } from "react";
import TagWindow from "../components/TagWindow";
import SearchInfo from "../components/SearchInfo";
function AccountPage(prop){
    const [img,setImg] = useState();
    const [pic,setPic] = useState([]);
   const [counter,setCounter] = useState(0);
    console.log("broo: " +img);
   const [name,setName] = useState("plss");
   const [tags,setTags] = useState({"height": 0,"gender": "man","age": 0, "tag_1": "click me", "tag_2": "click me", "tag_3": "click me", "searchTag": "click me"});
   const [likes,setLikes] = useState();
   
   const [saveTag,setSaveTag] = useState({"height": tags.height,"gender": tags.gender,"age": tags.age, "tag_1": tags.tag_1,"tag_2": tags.tag_2,"tag_3": tags.tag_3,"searchTag": tags.searchTag});

   const [moreSaveTag,setMoreSaveTag] = useState({"tag_1": null,"tag_2": null,"tag_3": null});

   const [tagButton,setTagButton] = useState();
   const [isDisabled,setIsDisabled] = useState(true);

   const [editMode,setEditMode] = useState(false);
  
    console.log("yooo"+prop.username);
    console.log(pic);
    console.log(pic[0]);
    loadImage();
   loadInfos();
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
    const height = document.querySelector("#height");
    const gender = document.querySelector("#gender");
    const age = document.querySelector("#age");
    const c = document.querySelector("#cancel");
    if(b.innerHTML == "Save Profile"){
        b.innerHTML = "Edit Profile";
        updateInfo();
        height.readOnly = true;
        gender.disabled = true;
        age.readOnly = true;
        setIsDisabled(true);
        setEditMode(false);
    }else{
      b.innerHTML = "Save Profile";  
      
      height.readOnly = false;
      gender.disabled = false;
      age.readOnly = false;
      setIsDisabled(false);
      setEditMode(true);
     c.style.display = "block";
    }
    console.log(tags);
}

function updateTags(e,b){
   
    if(b == "tag_1"){
        saveTag.tag_1 = e;
        tags.tag_1 = e;
        moreSaveTag[0] = e;
    }
    if(b == "tag_2"){
        saveTag.tag_2 = e;
        tags.tag_2 = e;
        moreSaveTag[1] = e;
    }
    if(b == "tag_3"){
        saveTag.tag_3 = e;
        tags.tag_3 = e;
        moreSaveTag[2] = e;
    }
    
    console.log("tags");
    console.log(tags.tag_1);
    console.log(saveTag.tag_1);
    console.log(tags.tag_2);
    console.log(saveTag.tag_2);
    console.log(tags.tag_3);
    console.log(saveTag.tag_3);
    console.log(moreSaveTag[0])
}


function updateSearchTag(e){
    saveTag.searchTag = e;
}

function updateInfo(){
    console.log("updated");
console.log(tags);
console.log(saveTag);
    axios.get("http://localhost:3004/updateInfo", {params:{name: prop.username,height:saveTag.height,gender:saveTag.gender,age:saveTag.age,tag_1:saveTag.tag_1,tag_2:saveTag.tag_2,tag_3:saveTag.tag_3,searchTag: saveTag.searchTag}})
    const c = document.querySelector("#cancel");
    c.style.display = "none";
}

async function loadInfos(){
  await axios.get("http://localhost:3004/updateInfo", {params:{name:prop.username}}).then(res=>(tags.height= res.data.height,tags.gender= res.data.gender,tags.age= res.data.age, tags.tag_1= res.data.tag_1, tags.tag_2= res.data.tag_2, tags.tag_3= res.data.tag_3, tags.searchTag= res.data.searchTag));
console.log("tags loaded");
console.log(moreSaveTag[0]);
console.log(tags.tag_1);


    if(moreSaveTag[0]!=null){
    saveTag.tag_1 = moreSaveTag[0];    
    console.log("newwwwww");
    }else if(moreSaveTag[0]==null){
        saveTag.tag_1 = tags.tag_1;    
        console.log("moooooooo");
        }
    if(moreSaveTag[1]!=null){
        saveTag.tag_2 = moreSaveTag[1];    
        }else if(moreSaveTag[1]==null){
            saveTag.tag_2 = tags.tag_2;      
            }
        if(moreSaveTag[2]!=null){
            saveTag.tag_3 = moreSaveTag[2];    
            }else if(moreSaveTag[2]==null){
                saveTag.tag_3 = tags.tag_3;       
                }
    
    
    

console.log(moreSaveTag[0]);
saveTag.height= tags.height;

saveTag.gender = tags.gender;

saveTag.age = tags.age;



saveTag.searchTag = tags.searchTag;
console.log(tags);
console.log(saveTag);
const height = document.querySelector("#height");
const gender = document.querySelector("#gender");
const age = document.querySelector("#age");
const tag_1 = document.querySelector("#tag_1");
const tag_2 = document.querySelector("#tag_2");
const tag_3 = document.querySelector("#tag_3");
const searchTag = document.querySelector("#searchTag");


if(!editMode){

height.value = tags.height;

gender.value = tags.gender;

age.value = tags.age;


tag_1.innerHTML= tags.tag_1;

tag_2.innerHTML= tags.tag_2;

tag_3.innerHTML = tags.tag_3;

searchTag.innerHTML = tags.searchTag;
    console.log("infos loaded");
    console.log(height);
}else{
   

}

}

function cancelEdit(){
    setEditMode(false);
    const b = document.querySelector("#EditButton");
    const height = document.querySelector("#height");
    const gender = document.querySelector("#gender");
    const age = document.querySelector("#age");
    const c = document.querySelector("#cancel");

    b.innerHTML = "Edit Profile"; 
    
   
      
    height.readOnly = true;
    gender.disabled = true;
    age.readOnly = true;
    setIsDisabled(true);
   c.style.display = "none";
}


    return <div id="AccountPage">
        <div id="AccountIntro">
            
           
            <button id="ProfileButton"> <input disabled={isDisabled} type="file" name="img" onChange={e=>handleImage(0,e)}/><img src={"http://localhost:3004/images/"+pic[0]} alt=""/> </button>
        
            <h1>{prop.username}</h1>
            <div id="EditButtons">
                          <button id="EditButton" onClick={editProfile}>Edit Profile</button>
            <button id="cancel" onClick={cancelEdit} style={{display: "none"}}>Cancel</button>  
            </div>

            <div id="likes"><img src="src/assets/heart.png" alt=""/>
            <p>0</p>
            </div>
        </div>
        <div id="AccountInfo">
            <div className="pics">
            <button> <input disabled={isDisabled}  type="file" name="img" onChange={e=>handleImage(0,e)}/><img src={"http://localhost:3004/images/"+pic[0]} alt=""/> </button>
            <button> <input disabled={isDisabled} type="file" name="img" onChange={e=>handleImage(1,e)}/><img src={"http://localhost:3004/images/"+pic[1]} alt=""/> </button>
            <button> <input disabled={isDisabled} type="file" name="img" onChange={e=>handleImage(2,e)}/><img src={"http://localhost:3004/images/"+pic[2]} alt=""/> </button>
            <button> <input disabled={isDisabled} type="file" name="img" onChange={e=>handleImage(3,e)}/><img src={"http://localhost:3004/images/"+pic[3]} alt=""/> </button>
            <button> <input disabled={isDisabled} type="file" name="img" onChange={e=>handleImage(4,e)}/><img src={"http://localhost:3004/images/"+pic[4]} alt=""/> </button>
            <button> <input disabled={isDisabled} type="file" name="img" onChange={e=>handleImage(5,e)}/><img src={"http://localhost:3004/images/"+pic[5]} alt=""/> </button>
            </div>
            <div className="info">
            <div className="personal">
                <ul>
                    <li>cm<input id="height" type="text" placeholder="height" onChange={e=> saveTag.height = e.target.value} readOnly /></li>
                    <li><select name="gender" id="gender" placeholder="gender" onChange={e=> saveTag.gender = e.target.value} disabled>
                        <option value={"man"}>man</option>
                        <option value={"woman"}>woman</option>
                       
                        </select></li>
                    <li>Years<input type="text" placeholder="age" onChange={e=> saveTag.age = e.target.value} id="age" readOnly/></li>
                </ul>
            </div>
            <div className="interest">
            <ul>
                    <button id="tag_1" className="tagButton" onClick={e=> showTagWindow(e.target.value)} onChange={e=> saveTag.tag_1 = e.target.value} value={"tag_1"} disabled= {isDisabled}></button>
                    <button id="tag_2" className="tagButton" onClick={e=>showTagWindow(e.target.value)} onChange={e=> saveTag.tag_2 = e.target.value} value={"tag_2"} disabled= {isDisabled}></button>
                    <button id="tag_3" className="tagButton" onClick={e=>showTagWindow(e.target.value)} onChange={e=> saveTag.tag_3 = e.target.value} value={"tag_3"} disabled= {isDisabled}></button>
                </ul>
            </div>
            <div className="searchingFor">
            <ul>
                    <li>Searching for:</li>
                    <button id="searchTag" onClick={e=>showSearchWindow(e.target.value)} onChange={e => saveTag.searchTag = e.target.value} value={"lo"} disabled= {isDisabled}></button>
                </ul>
            </div>
        </div>
        <TagWindow bro={tagButton} update={updateTags}></TagWindow>
        <SearchInfo update={updateSearchTag}></SearchInfo>
        </div>
    </div>
}
export default AccountPage;