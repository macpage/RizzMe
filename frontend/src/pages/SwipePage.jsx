import SwipeProfile from "../components/SwipeProfile";

function SwipePage(prop){
    return <div id="SwipePage">
        <SwipeProfile username={prop.username}></SwipeProfile>
    </div>
}

export default SwipePage;