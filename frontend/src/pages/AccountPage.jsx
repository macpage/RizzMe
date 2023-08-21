import { useState } from "react";

function AccountPage(prop){
    const [img,setImg] = useState();
    console.log("yooo"+prop.username);
    const handleImage = event =>{
console.log(event.target.files);
setImg(event.target.files[0]);
console.log(event.target.files[0]);
    }
    return <div id="AccountPage">
        <div id="AccountIntro">
            <img src={img} alt="" />
            <input type="file" name="img" onChange={handleImage} />
            <button type="submit">Upload</button>
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