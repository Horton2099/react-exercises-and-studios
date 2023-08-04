import styles from './Ingredients.module.css';

const RecipeIngredients = () => {
    let ingredients = ["Eggs", "Flour", "Milk", "Oil", "Sugar", "Vanilla Extract"];
    return (
      <div>
        <h3>Recipe Ingredientes</h3>
        <ul className = {styles.ingredientList}>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
        </ul>
      </div> 
    )
}

export default RecipeIngredients;