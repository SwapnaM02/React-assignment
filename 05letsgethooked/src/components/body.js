import Restcard from "./resto";
import {restList} from "./config";
import {useState} from "react";

function filterData(searchInput,restroList){
    const filter=restroList.filter((restaurant)=>
      restaurant.data.name.includes(searchInput)
    );
    return filter;
  }




const Body =() =>{
    // const searchInput="KFC";
    const [searchInput,setsearchInput]=useState();
    const [restroList,setrestroList]=useState(restList);
    return (
        <>
        <div className="search-container">
            
            <input type="text" className="search-input" value={searchInput} placeholder="search" 
            onChange={(e) =>{
                setsearchInput(e.target.value);
                console.log(searchInput);
            }}/>


            <button className="search-btn"
            onClick = { () => {
                const data=filterData(searchInput,restroList);
                setrestroList(data);
            }} >search</button>
                
        </div>

    <div class="restcollection">
        
        {
             restroList.map((restobj) => {
            return <Restcard {...restobj.data} keys={restobj.data.ID}/>
                                         })
        }
  
        
        
        
        
        
    </div>
    </>
    )
  };

  export default Body;