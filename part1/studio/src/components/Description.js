import styles from './Description.module.css';
import React from 'react';

class RecipeDescription extends React.Component {
    render() {
        return(
        <div>
            <div>
                <h1>Waffles</h1>
                <p>Tasty breakfast option.</p>
            </div>
            <RecipeAuthor />
        </div>
        );
    }
}

const RecipeAuthor = () => {
    let authorLink = "https://www.allrecipes.com/recipe/22180/waffles-i/";
    let authorPhoto = "https://www.allrecipes.com/thmb/-_Z9kmmVHRzK2jUnIKXoJT7VOKI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/22180-waffles-mfs-80-e198bfc72b4846a8804309245f1ece54.jpg";
    let authorName = " OneShyOfABunch";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Waffles Galour</a> 
           </div>
        </div>
     );

}

export default RecipeDescription;