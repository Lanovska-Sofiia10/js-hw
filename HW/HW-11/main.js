// #whXxOBlYS0H
//
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.

fetch('https://dummyjson.com/recipes')
        .then((response) => response.json())
        .then((recipesObj) => {
            let {recipes} = recipesObj;
            console.log(recipes);

            let recipesDiv = document.getElementsByClassName('recipes')[0];
            for (const recipe of recipes) {
                let recipeContainer = document.createElement('div');
                recipeContainer.classList.add('recipe-container');
                
                let recipeTitle = document.createElement('p');
                recipeTitle.innerText = `
                        Id: ${recipe.id }
                        Name: ${recipe.name}`;
                
                let recipeImage = document.createElement('img');
                recipeImage.classList.add('image');
                recipeImage.src = recipe.image;


                let titleIngredientsList = document.createElement('p');
                titleIngredientsList.innerText = `Ingredients: `;

                let ingredientsList = document.createElement('ul');
                for (const ingredient of recipe.ingredients) {
                    let liIngredient = document.createElement('li');
                    liIngredient.innerText = ingredient;
                    ingredientsList.appendChild(liIngredient);
                }

                let titleInstructionsList = document.createElement('p');
                titleInstructionsList.innerText = `Instructions: `;

                let instructionsList = document.createElement("ul");
                for (const instruction of recipe.instructions) {
                    let liInstruction = document.createElement('li');
                    liInstruction.innerText = instruction;
                    instructionsList.appendChild(liInstruction);
                }

                let cookingDetails = document.createElement('p');
                cookingDetails.innerText = `Prep Time Minutes: ${recipe.prepTimeMinutes},
                    Cook Time Minutes: ${recipe.cookTimeMinutes},
                    Servings: ${recipe.servings},
                    Difficulty: ${recipe.difficulty},
                    Cuisine: ${recipe.cuisine},
                    Calories Per Serving: ${recipe.caloriesPerServing},
                `;

                let titleTagsList = document.createElement('p');
                titleTagsList.innerText = `Tags: `;

                let tagsList = document.createElement('ul');
                for (const tag of recipe.tags) {
                    let liTag = document.createElement('li');
                    liTag.innerText = tag;
                    tagsList.appendChild(liTag);
                }

                let metaDetails = document.createElement('p');
                metaDetails.innerText = `User Id: ${recipe.userId},
                Rating: ${recipe.rating},
                Review Count: ${recipe.reviewCount}`;

                let mealTypeContainer = document.createElement("div");
                for (const mealType of recipe.mealType) {
                    let mealTypeP = document.createElement('p');
                    mealTypeP.innerText = `Meal Type: ${mealType}`;
                    mealTypeContainer.appendChild(mealTypeP);
                }
                
                recipeContainer.append(recipeTitle, recipeImage, titleIngredientsList, ingredientsList, titleInstructionsList, instructionsList, cookingDetails, titleTagsList, tagsList, metaDetails, mealTypeContainer);
                recipesDiv.appendChild(recipeContainer);
            }
        });



