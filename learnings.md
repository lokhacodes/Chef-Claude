![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image-3.png)

1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
   1. pass the new version of state that we want to use as the replacement for the old version of state.
   2. Pass a callback function. Must return what we want the new value of state to be. Will receive the  old version of state as a parameter so we can use it to  help determine what we want the new value  of state to be. 


2. When would you want to pass the first option (from answer
   above) to the state setter function?
Whenver we don't really care about or need the old value, we simply want to set a new value. 


3. When would you want to pass the second option (from answer
   above) to the state setter function?
Whenver we do care about the previous value in state and need it to help us determine what the new value should be.


## Conditional rendering 

1. What is "conditional rendering"?

when we want to only sometimes display on the page based on some kind of conditions

2. When would you use &&?

When you want to either display something or not display something

3. When would you use a ternary?

When you need to decide which of 2 things to display

4. What if you need to decide between > 2 options on
   what to display?

if else switch 

Make sure .env is in your .gitignore to avoid committing sensitive data


/**
 * Challenge: Get a recipe from the AI!
 * 
 * This will be a bit harder of a challenge that will require you
 * to think critically and synthesize the skills you've been
 * learning and practicing up to this point.
 * 
 * We'll start with a mini-quiz:
 * 
 * 1. Think about where the recipe response should live and how you're
 *    going to make sure it doesn't disappear between each state change  in
 *    the app. (I don't mean between refreshes of your mini-browser.
 *    You don't need to save this to localStorage or anything more permanent
 *    than in React's memory for now.)
 *  
 * Ans: I am going to save the response in React State 

 * 2. What action from the user should trigger getting the recipe?
 * When the user clicks the get receipe button 
 */