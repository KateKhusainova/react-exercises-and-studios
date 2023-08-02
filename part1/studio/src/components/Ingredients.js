import styles from './Ingredients.module.css';

export default function RecipeIngredients(){
    let ingredients = ["Hamburger patties", "Hamburger buns", "Bacon", "Cheese", "Lettuce"];
    return (
       <div>
        <h3>Ingredients</h3>
        <ul className={styles.ingredientList}>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
        </ul>
       </div>
    );
}