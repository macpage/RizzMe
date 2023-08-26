import axios from "axios";
import { useEffect, useState } from "react";
function AccountPage(prop){
    const [img,setImg] = useState();
    const [pic,setPic] = useState([]);
    const [bro,setBro] = useState(null);
   
    console.log("broo: " +img);
   const [name,setName] = useState("plss");
 
  
    console.log("yooo"+prop.username);

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

showImage(i);

        }
deleteImage(i,uploadImage);

    }

    async function loadImage(){
        let lol;
        await  axios.get("http://localhost:3004/getImage").then(res=>{lol=res.data});
       
        lol.forEach(e => {
          if(e.index == 2){
          
            if(!pic[0]){
              setPic(arr=> [...arr.slice(0,0),e.image]);  
            }
           console.log(pic[0]);
           //
            console.log(e);
            

          }else{
              console.log("didnt work: " + e.username);
          }
        });
             console.log("time to show");
    }
    
  async  function showImage(){
 
       //axios.delete("http://localhost:3004/getImage/").then(response => {
      //  console.log(response)}).catch(err=> console.log(err));
       axios.get("http://localhost:3004/getImage").then(res=>{console.log(res.data[res.data.length-1].image),setPic(arr=> [...arr.slice(0,0),res.data[res.data.length-1].image])}).catch(err => console.log(err)) 
        console.log("your " +pic);
        console.log("sdafnllksadf");
    }

async function deleteImage(i,callback){
    console.log("time to delete");
   await axios.get("http://localhost:3004/deleteImage",{params:{name: prop.username, index:i}}).then(res=>console.log(res));
   console.log(" deleted");
   callback();
}
    return <div id="AccountPage">
        <div id="AccountIntro">
            
           
            <button> <input type="file" name="img" onChange={e=>handleImage(2,e)}/><img src={"http://localhost:3004/images/"+pic[0]} alt=""/> </button>
            <button type="submit" >Upload</button>
            <h1>{prop.username}</h1>
            <p>lol</p>
        </div>
        <div id="AccountInfo">
            <div className="pics">
                <img src={"http://localhost:3004/images/"+pic[0]} alt="" />
                <img src={"http://localhost:3004/images/"+pic[1]}  alt="" />
                <img src={"http://localhost:3004/images/"+pic[2]}  alt="" />
                <img src={"http://localhost:3004/images/"+pic[3]}  alt="" />
                <img src={"http://localhost:3004/images/"+pic[4]}  alt="" />
                <img src={"http://localhost:3004/images/"+pic[5]}  alt="" />
            </div>
        </div>
    </div>
}
export default AccountPage;