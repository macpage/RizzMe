import axios from "axios";
import { useEffect, useState } from "react";
function AccountPage(prop){
    const [img,setImg] = useState(null);
   const [name,setName] = useState("plss");
 
    
    console.log("yooo"+prop.username);
    function handleImage(){
       async function uploadImage(){
const formData = new FormData();
formData.append("file",img);
formData.append("name",prop.username);
console.log(formData);
await axios.post("http://localhost:3004/upload",formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then(res=>console.log(res)).catch(err=>console.log(err));
console.log("imggg");
showImage();
        }
 uploadImage();

    }

    

   

    function showImage(){
        axios.get("http://localhost:3004/getImage").then(res=>{console.log(res);setImg(res.data[res.data.length-1].image)}).catch(err => console.log(err)) 
    }
    return <div id="AccountPage">
        <div id="AccountIntro">
            <img src={"http://localhost:3004/images/"+img} alt="" />
            <input type="file" name="img" onChange={e=>setImg(e.target.files[0])} />
            <button type="submit" onClick={handleImage}>Upload</button>
            <h1>{prop.username}</h1>
            <p>lol</p>
        </div>
        <div id="AccountInfo">
            <div className="pics">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
    </div>
}
export default AccountPage;