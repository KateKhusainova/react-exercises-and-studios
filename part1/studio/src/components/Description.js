import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://badbatchbaking.com/the-best-five-guys-burger-copycat-recipe/";
    let authorPhoto = "https://i.pinimg.com/280x280_RS/45/5d/83/455d835bf5e90c344403cca12b58ab74.jpg";
    let authorName = "Bad Batch Baking | Restaurant Copycat Recipes & Family Favorites";
    return (
      <div className = {styles.recipeAuthorBlock}>
         <img src={authorPhoto} alt = "Mellory, owner of Baking Bad Batch" className={styles.imageUpdates} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Website Bad Batch Baking</a>
         </div>
      </div>
    );
}

class RecipeDescription extends React.Component {
   render () {
      return (
         <div>
            <div>
               <h1>The Best Five Guys Burger Copycat Recipe</h1>
               <p>This is the best Five Guys burger copycat recipe with the signature gooey cheesy center!</p>
            </div>
            <RecipeAuthor />
         </div>
      );
   }
}



export default RecipeDescription;