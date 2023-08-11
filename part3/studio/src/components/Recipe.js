const RecipeAuthor = () => {
   let authorLink = "https://damndelicious.net/about-me/";
   let authorPhoto = "https://s23209.pcdn.co/wp-content/uploads/2018/06/about.jpg";
   let authorName = "Chungah Rhee";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Skirt Steak", "corn tortilla", "red onion", "lime", "cilantro"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Mexican Street Tacos</h1>
            <p>It’s a quick recipe using a simple marinade for your skirt steak. It just needs 1 hour of marinating before you throw it onto a skillet. From there, you can top off your tacos with diced onion, cilantro and fresh lime juice.</p>
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
      <img src="https://s23209.pcdn.co/wp-content/uploads/2019/04/Mexican-Street-TacosIMG_9091.jpg" alt="Street Tacos" className="imageUpdates"/>
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