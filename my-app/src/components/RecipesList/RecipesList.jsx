import { Recipe } from "../Recipie/Recipe"

export const RecipesList = ({recipes}) => {
    return <ul>
        {recipes.map(({image, name, time, servings, calories}) => {
            return <li key={image}><Recipe 
                name={name}
                time={time}
                image={image}
                servings={servings}
                calories={ calories} /></li>
        })}
    </ul>
}