import { useState } from "react";

function SwipeProfile(){
    const [pic,setPic] = useState("src/assets/Makima.webp");
    const handleClick = event =>{
        console.log(event.target.src);
        setPic(event.target.src)
    }
    return <div id="SwipeProfile">
        <div id="SwipeIntro">
      <img src={pic} alt="" className="SwipePic" />
       <h1 id="SwipeProfileName">Makima</h1>
       <p className="text">Searchin for a new pet 👀</p>
       <div id="SwipeButtons">
        <button id="Back"><img src="src/assets/SwipeBack.png" alt="" /></button>
        <button id="NoRizz"><img src="src/assets/Trash.png" alt="" /></button>
        <button id="Rizz"><img src="src/assets/Rizz.png" alt="" /></button>
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

    </div>

    </div>
}

export default SwipeProfile;