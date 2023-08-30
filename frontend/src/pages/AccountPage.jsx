import axios from "axios";
import { useEffect, useState } from "react";
function AccountPage(prop){
    const [img,setImg] = useState();
    const [pic,setPic] = useState([]);
    const [bro,setBro] = useState(null);
   const [counter,setCounter] = useState(0);
    console.log("broo: " +img);
   const [name,setName] = useState("plss");
   const [tags,setTags] = useState({"height": null,"gender": null,"age": null});
 
  
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
    return <div id="AccountPage">
        <div id="AccountIntro">
            
           
            <button> <input type="file" name="img" onChange={e=>handleImage(0,e)}/><img src={"http://localhost:3004/images/"+pic[0]} alt=""/> </button>
            <button type="submit" >Upload</button>
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
                    <li><input type="text" placeholder="height" value={tags.height}  /></li>
                    <li><input type="text" placeholder="gender" value={tags.gender}  /></li>
                    <li><input type="text" placeholder="age" value={tags.age}  /></li>
                    <li><select name="body" id="body">
                        <option value="thicc">thicc 🍑</option>
                        <option value="flat">flat 🦴</option>
                        <option value="fat">fat 🐷</option>
                        <option value="skinny">skinny 🎋</option>
                        <option value="muscular">muscular 🦍</option>
                        </select></li>
                </ul>
            </div>
            <div className="interest">
            <ul>
                    <li><select name="watchList" id="watchList">
                        <option value="anime">Anime 🥷</option>
                        <option value="action">action 💥</option>
                        <option value="comedy">comedy 🎭</option>
                        <option value="porn">porn 🔞</option>
                        </select></li>
                    <li>Food 🍜</li>
                    <li>Pets 🐈</li>
                    <li>Work 👩🏻‍💻</li>
                </ul>
            </div>
            <div className="searchingFor">
            <ul>
                    <li>Searching for:</li>
                    <li>Fun 👀💦 </li>
                </ul>
            </div>
        </div>
        </div>
    </div>
}
export default AccountPage;