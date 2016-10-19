mainApp.factory('FetchFactory', function() {
	var objectCache = [
		{ id: 0, title: 'African', numberOfRecipes: 44, averageNumberOfIngredientsPerRecipe: 2, continent:'Africa', averageCalories: 520},
		{ id: 1, title: 'Chinese', numberOfRecipes: 21, averageNumberOfIngredientsPerRecipe: 13, continent:'Asia', averageCalories: 1904},
		{ id: 2, title: 'Japanese', numberOfRecipes: 93, averageNumberOfIngredientsPerRecipe: 9, continent:'Japan', averageCalories: 738},
		{ id: 3, title: 'korean', numberOfRecipes: 23, averageNumberOfIngredientsPerRecipe: 6, continent:'Asia', averageCalories: 830},
		{ id: 5, title: 'Vietnamese', numberOfRecipes: 62, averageNumberOfIngredientsPerRecipe: 9, continent:'Vietnam', averageCalories: 632},
		];
    // myFunction = function(){ console.log ('you called myFunction()')};  
    return {
      fetch: function () {
      	return objectCache;
      },
      fetchAt: function (x) {
      	return objectCache[x];
      }
  };
});

