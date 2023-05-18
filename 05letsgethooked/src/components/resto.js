import {IMG_CDN_URL} from "./config";

const Restcard = ( {name,cuisines,cloudinaryImageId,lastMileTravelString} ) =>{
  
    return (
    <div className="card"> 
    <img 
    src={
        IMG_CDN_URL +cloudinaryImageId
        } />
    <h2>{name}</h2>
    <h5>{cuisines.join(",")}</h5>
    <h4>{lastMileTravelString} stars</h4>
  
    </div>
    );
  };


  export default Restcard;