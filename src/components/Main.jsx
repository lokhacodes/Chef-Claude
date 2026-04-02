import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientList from "./IngredientList"
import { getRecipeFromChefClaude, getRecipeFromMistral } from "./ai"

export default function Main () {
   const [ingredients, setIngredients] = React.useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )


    const [recipeShown, setRecipeShown] = React.useState(false)

    function toggleRecipeShown(){
        setRecipeShown(prevShown => !prevShown)
    }







    function addIngredient(formData){
       
        const newIngredient = formData.get("ingredient")
       setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    

   

    return (
        <main>
            <form className="ingredient-form" action={addIngredient}> 
              <input 
              type= "text"
              placeholder="e.g. oregano"
              aria-label="Add ingredient"
              name="ingredient"
              />
              <button type="submit">Add Ingredient </button>  
            </form>

              {ingredients.length > 0 && 
              <IngredientList ingredients = {ingredients}
              toggleRecipeShown = {toggleRecipeShown} />}
                    {recipeShown && <ClaudeRecipe />
                        }
        </main>
    )

}