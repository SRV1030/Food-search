import React from 'react';
import style from "./recepie.module.css"
const Recepie = ({ title, calories, image, ingredients }) => {
    return (
           
        <div className={style.container}>
            <div className={style.recepie}>
            <div className={style.card}>
                <div className={style.content}>
                    <div className={style.contentBx}>
                        <h2 >{title}</h2>
                        {/* <p>{calories}</p> */}
                        <div className={style.imgBx}><img className={style.image} src={image} alt="" /></div>
                    </div>
                </div>
                <div className={style.socials}>
                    <ol>
                        {
                            ingredients.map(ing => (
                                <li>{ing.text}</li>
                            )
                            )
                        }
                    </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Recepie;