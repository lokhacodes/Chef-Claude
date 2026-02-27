import React from "react"
export default function Main () {
    const [ingredients, setIngredients] = React.useState([
        /*"oregano",
        "basil",
        "thyme",
        "rosemary",
        "parsley"*/
    ])

    const ingredientsListItems = ingredients.map(ingredient =>(
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event){
        event.preventDefault()
       
        //console.log("Form submitted")
        const formdata = new FormData(event.currentTarget)
        const newIngredient = formdata.get("ingredient")
       // ingredients.push(newIngredient)
      //  console.log("Updated ingredients list:", ingredients)
       setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }


    return (
        <main>
            <form className="ingredient-form" onSubmit={handleSubmit}> 
              <input 
              type= "text"
              placeholder="e.g. oregano"
              aria-label="Add ingredient"
              name="ingredient"
              />
              <button type="submit">Add Ingredient </button>  
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )

}