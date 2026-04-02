import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientList from "./IngredientList"
import { getRecipeFromMistral } from "/src/ai"

export default function Main () {
   const [ingredients, setIngredients] = React.useState([])


    const [recipe, setRecipe] = React.useState("")

    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        console.log(recipeMarkdown)
        setRecipe(recipeMarkdown)
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
              getRecipe = {getRecipe} />}
                    {recipe && <ClaudeRecipe recipe = {recipe}/>
                        }
        </main>
    )

}