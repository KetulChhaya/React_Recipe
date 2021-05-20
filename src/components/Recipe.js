import React from 'react'
import style from './recipe.module.css'

const Recipe = ({title, calories, cuisine, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img src={image} alt="recipe-image" className={style.img}/>
            <h3><strong>Cuisine Type :</strong> {cuisine}</h3>
            <h3><strong>Calories :</strong> {calories}</h3>
            <h3>Ingredients:</h3>
            <ol>
                {ingredients.map((ingredient, index) => 
                    <li key={index}>{ingredient.text}</li>
                )}
            </ol>
        </div>
    )
}

export default Recipe