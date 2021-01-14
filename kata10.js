const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for (let recipe of recipes) {
    if (bakeryA.includes(recipe.ingredients[0]) && bakeryB.includes(recipe.ingredients[1])) {
      return recipe.name;
    } else if (bakeryB.includes(recipe.ingredients[0]) && bakeryA.includes(recipe.ingredients[1])) {
      return recipe.name;
   }
  }
};