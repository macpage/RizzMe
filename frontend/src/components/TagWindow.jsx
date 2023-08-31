import { useState } from "react";

function TagWindow(props){
    const [tag,setTag] = useState("chicken");
  
    function addTag(e){

      
        console.log("tag: " + e);

        
       
        const tagButton = document.querySelectorAll(".tagButton");
        tagButton.forEach(b => {
            if(b.value==props.bro){
                console.log("herrrre" + e);
               
                b.innerHTML = e;
            }
           
        });
       
        
        
        console.log(props.bro);
    }
    return <div id="TagWindow">
        <div id="entertainment"><h1>Entertainment</h1>
        <div className="tags">
            <button onClick={e => addTag(e.target.value)} value={"Sports"}>Sports</button>
            <button onClick={e => addTag(e.target.value)} value={"Action"}>Action</button>
            <button onClick={e => addTag(e.target.value)} value={"Comedy"}>Comedy</button>
            <button onClick={e => addTag(e.target.value)} value={"Horror"}>Horror</button>
            <button onClick={e => addTag(e.target.value)} value={"Romance"}>Romance</button>
            <button onClick={e => addTag(e.target.value)} value={"Thriller"}>Thriller</button>
            </div></div>
        <div id="hobbies"><h1>Hobbies</h1>
        <div className="tags">
        <button onClick={e => addTag(e.target.value)} value={"Coding"}>Coding</button>
        <button onClick={e => addTag(e.target.value)} value={"Dancing"}>Dancing</button>
        <button onClick={e => addTag(e.target.value)} value={"Studying"}>Studying</button>
        <button onClick={e => addTag(e.target.value)} value={"Desinging"}>Designing</button>
        <button onClick={e => addTag(e.target.value)} value={"Music"}>Music</button>
        <button onClick={e => addTag(e.target.value)} value={"Chillin"}>Chillin</button>
            </div></div>
        <div id="personally"><h1>Personally</h1>
        <div className="tags">
        <button onClick={e => addTag(e.target.value)} value={"Thicc"}>Thicc</button>
        <button onClick={e => addTag(e.target.value)} value={"Intelligent"}>Intelligent</button>
        <button onClick={e => addTag(e.target.value)} value={"Introvert"}>Introvert</button>
        <button onClick={e => addTag(e.target.value)} value={"Extrovert"}>Extrovert</button>
        <button onClick={e => addTag(e.target.value)} value={"Lazy"}>Lazy</button>
        <button onClick={e => addTag(e.target.value)} value={"Energy"}>Energy</button>
            </div></div>
    </div>
}
export default TagWindow;