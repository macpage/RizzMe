
import axios from "axios";
import { useState } from "react";

function SwipeProfile(prop){

    console.log("my userame: " + prop.username);
    async function loadProfiles(){
    await axios.get("http://localhost:3004/getInfos" ,{params:{username: prop.username}}).then(res=>console.log(res));   
    }
    loadProfiles();
    const [pic,setPic] = useState("src/assets/Makima.webp");
    const [show,setShow] = useState();
    const handleClick = event =>{
        console.log(event.target.src);
        setPic(event.target.src)
    }

    const activateRizz = event => {
        setShow("flex");
    }
    const deactivateRizz = event => {
        //
        console.log(show);
        document.querySelector(".rizzText").classList.add("closing");
        setTimeout(() => {
            document.querySelector(".rizzText").classList.remove("closing");
          setShow("none");  
        }, 400);
    }
    return <div id="SwipeProfile">
        <div id="SwipeIntro">
      <img src={pic} alt="" className="SwipePic" />
       <h1 id="SwipeProfileName">Makima</h1>
       <p className="text">Searchin for a new pet 👀</p>
       <div id="SwipeButtons">
        <button id="Back"><img src="src/assets/SwipeBack.png" alt="" /></button>
        <button id="NoRizz"><img src="src/assets/Trash.png" alt="" /></button>
        <button id="Rizz" onClick={activateRizz}><img src="src/assets/Rizz.png" alt="" /></button>
       </div>
        </div>
    <div id="SwipeInfo">
        <div className="pics">
            <img onClick={handleClick} src="src/assets/Makima.webp" alt="" />
            <img onClick={handleClick} src="src/assets/Makima2.jpeg" alt="" />
            <img onClick={handleClick} src="src/assets/Makima3.jpeg" alt="" />
            <img onClick={handleClick} src="src/assets/Makima4.webp" alt="" />
            <img onClick={handleClick} src="src/assets/Makima5.webp" alt="" />
            <img onClick={handleClick} src="src/assets/Makima6.webp" alt="" />
        </div>
        <div className="info">
            <div className="personal">
                <ul>
                    <li>168cm 🦴</li>
                    <li>Girl  👩🏻 </li>
                    <li>25 y.o.📆</li>
                    <li>thicc 🍑</li>
                </ul>
            </div>
            <div className="interest">
            <ul>
                    <li>Anime 📺</li>
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

        <div className="rizzText" style={{display: show}}>
            <textarea type="text" />
            <div className="rizzButtons">

                <button onClick={deactivateRizz}>close</button>
                <button>rizz</button>
            </div>
            
        </div>
        
    </div>

    </div>
}

export default SwipeProfile;