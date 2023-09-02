import axios from "axios";
import { useEffect, useState } from "react";
import TagWindow from "../components/TagWindow";
function AccountPage(prop){
    const [img,setImg] = useState();
    const [pic,setPic] = useState([]);
    const [bro,setBro] = useState(null);
   const [counter,setCounter] = useState(0);
    console.log("broo: " +img);
   const [name,setName] = useState("plss");
   const [tags,setTags] = useState({"height": null,"gender": null,"age": null});

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
    console.log("time to delete");
   await axios.get("http://localhost:3004/deleteImage",{params:{name: prop.username, index:i}}).then(res=>console.log(res));
   console.log(" deleted");
   callback();
}


function showTagWindow(e){
const tw = document.querySelector("#TagWindow");
tw.style.display = "block";
setTagButton(e);
}




    return <div id="AccountPage">
        <div id="AccountIntro">
            
           
            <button> <input type="file" name="img" onChange={e=>handleImage(0,e)}/><img src={"http://localhost:3004/images/"+pic[0]} alt=""/> </button>
        
            <h1>{prop.username}</h1>
            <p>lol</p>
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
                    <li>cm<input type="text" placeholder="height"  value={tags.height}  /></li>
                    <li><select name="gender" id="gender" placeholder="gender">
                        <option value={tags.gender}>man</option>
                        <option value={tags.gender}>woman</option>
                       
                        </select></li>
                    <li>Years<input type="text" placeholder="age" value={tags.age}  /></li>
                </ul>
            </div>
            <div className="interest">
            <ul>
                    <li><button className="tagButton" onClick={e=> showTagWindow(e.target.value)} value={"crazy"}>lol</button></li>
                    <li><button className="tagButton" onClick={e=>showTagWindow(e.target.value)} value={"baby"}>lol</button></li>
                    <li><button className="tagButton" onClick={e=>showTagWindow(e.target.value)} value={"sexy"}>lol</button></li>
                </ul>
            </div>
            <div className="searchingFor">
            <ul>
                    <li>Searching for:</li>
                    <li>Fun 👀💦 </li>
                </ul>
            </div>
        </div>
        <TagWindow bro={tagButton}></TagWindow>
        </div>
    </div>
}
export default AccountPage;