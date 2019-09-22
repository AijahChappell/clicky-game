import React from "react";
import images from "../../images.json";

function Images (props) {
    function shuffle(arr) {
        for (let i = arr.length -1; i>0; i--) {
            let j = Math.floor(Math.random()*(i+1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    const shuffledArr = shiffle(imgs);

    return(
        <div className="image-container">
            {shuffledArr.map(item => (
                <img src={item.image} id={item.id} key={item.id} onClick={props.handleClick} alt={item.name}></img>
            ))}
        </div>
    )
}

export default Images;