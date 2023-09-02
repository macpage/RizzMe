function SearchInfo(props){

    function hideSearchWindow(e){
        const search = document.querySelector("#searchTag");
        search.innerHTML = e;
        const searchInfo = document.querySelector("#SearchInfo");
        searchInfo.style.display = "none";
        props.update(e);
    }
    return <div id="SearchInfo">
        <div className="tags">
        <button onClick={e => hideSearchWindow(e.target.value)} value={"Relationship"}>Relationship</button>
        <button onClick={e => hideSearchWindow(e.target.value)} value={"Friends"}>Friends</button>
        <button onClick={e => hideSearchWindow(e.target.value)} value={"Fun"}>Fun</button>
        </div>
    </div>
}

export default SearchInfo;