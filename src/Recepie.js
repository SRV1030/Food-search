import React from 'react';
import style from "./recepie.module.css"
const Recepie=({title,calories,image,ingredients})=>{
    return(
        <div className={style.recepie}>
            <h1 >{title}</h1>
            <p>{calories}</p>
            <img className={style.image} src={image} alt=""/>
            <ol>
                {
                    ingredients.map(ing=>(
                        <li>{ing.text}</li>
                    )
                        )
                }
            </ol>
        </div>
    );
}
export default Recepie;