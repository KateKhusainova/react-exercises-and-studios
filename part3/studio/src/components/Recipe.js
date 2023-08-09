const RecipeAuthor = () => {
   let authorLink = "https://natashaskitchen.com/grilled-salmon-with-garlic-lime-butter/";
   let authorPhoto = "https://i.pinimg.com/280x280_RS/cc/e6/21/cce6215cd353b4d9c87cf7c3579cc62b.jpg";
   let authorName = "Natashas Kitchen";

   return (
      <div>
         <img src={authorPhoto} alt = "Natasha Kravchuk" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Website Natashas Kitchen</a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
      "2 lb Salmon filet (SKIN-ON)", 
      "Unsalted butter", 
      "Garlic smashed (NOT PRESSED)", 
      "Lime juice plus lime wedges to serve", 
      "Sea salt and black pepper", 
      "Fresh dill"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Grilled Salmon with Garlic Lime Butter</h1>
            <p>Grilled Salmon with garlic lime butter is flaky, juicy, and cooked to perfection with crispy salmon skin. Brushing on the flavored butter makes each bite irresistible.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://i.pinimg.com/564x/53/78/4f/53784f7d1d55d55c30c1aba677ec6814.jpg" alt="Grilled Salmon with Garlic Lime Butter" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}