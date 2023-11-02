import React from "react";


function Star(props){


const favourite = props.isFilled ? "fa-solid fa-star" :"fa-regular fa-star";
    
    return(

        
        <div className='card--favourite'>
            <i className={favourite} onClick={props.handleClick}></i>
            </div>

    )
}


export default Star