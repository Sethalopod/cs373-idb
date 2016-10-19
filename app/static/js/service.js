mainApp.factory('CuisineFetchFactory', function() {
	var objectCache = [
		{ id: 0, title: 'African', numberOfRecipes: 44, averageNumberOfIngredientsPerRecipe: 2, continent:'Africa', averageCalories: 520, url:'http://www.capitalfm.co.ke/lifestyle/files/2011/11/Roots-Gourmet-Restaurant-South-Africa-PHOTOGRAPHED-BY-Susan-Wong-2011-1.jpg'},
		{ id: 1, title: 'Chinese', numberOfRecipes: 21, averageNumberOfIngredientsPerRecipe: 13, continent:'Asia', averageCalories: 1904, url:"http://www.simplybridal.com/images/blog/eggroll-appetizers.jpg"},
		{ id: 2, title: 'Japanese', numberOfRecipes: 93, averageNumberOfIngredientsPerRecipe: 9, continent:'Asia', averageCalories: 738, url:"https://media.timeout.com/images/100665917/image.jpg"},
		// { id: 3, title: 'Korean', numberOfRecipes: 23, averageNumberOfIngredientsPerRecipe: 6, continent:'Asia', averageCalories: 830, url: "https://media.timeout.com/images/100446787/image.jpg"},
		// { id: 4, title: 'Vietnamese', numberOfRecipes: 62, averageNumberOfIngredientsPerRecipe: 9, continent:'Vietnam', averageCalories: 632, url: "https://www.cirquedusoleil.com/las-vegas/assets/img/extras/restaurants_noodles.jpg"},
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


mainApp.factory('RecipeFetchFactory', function() {
  var objectCache = [
    { id: 0, title: 'African', readyInMinutes: 44, servings: 2, calories:500, steps: 20, url:'http://www.capitalfm.co.ke/lifestyle/files/2011/11/Roots-Gourmet-Restaurant-South-Africa-PHOTOGRAPHED-BY-Susan-Wong-2011-1.jpg'},
    { id: 1, title: 'African', readyInMinutes: 44, servings: 2, calories:500, steps: 20, url:'http://www.capitalfm.co.ke/lifestyle/files/2011/11/Roots-Gourmet-Restaurant-South-Africa-PHOTOGRAPHED-BY-Susan-Wong-2011-1.jpg'},
    { id: 2, title: 'African', readyInMinutes: 44, servings: 2, calories:500, steps: 20, url:'http://www.capitalfm.co.ke/lifestyle/files/2011/11/Roots-Gourmet-Restaurant-South-Africa-PHOTOGRAPHED-BY-Susan-Wong-2011-1.jpg'},
    // { id: 3, title: 'Korean', numberOfRecipes: 23, averageNumberOfIngredientsPerRecipe: 6, continent:'Asia', averageCalories: 830, url: "https://media.timeout.com/images/100446787/image.jpg"},
    // { id: 4, title: 'Vietnamese', numberOfRecipes: 62, averageNumberOfIngredientsPerRecipe: 9, continent:'Vietnam', averageCalories: 632, url: "https://www.cirquedusoleil.com/las-vegas/assets/img/extras/restaurants_noodles.jpg"},
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



mainApp.factory('IngredientFetchFactory', function() {
  var objectCache = [
    { id: 0, title: 'African', servingSize: 44, totalWeight: "2 lbs", brand:'Temp', category: "temp", url:'http://www.capitalfm.co.ke/lifestyle/files/2011/11/Roots-Gourmet-Restaurant-South-Africa-PHOTOGRAPHED-BY-Susan-Wong-2011-1.jpg'},
    { id: 1, title: 'African', servingSize: 44, totalWeight: "2 lbs", brand:'Temp', category: "temp", url:'http://www.capitalfm.co.ke/lifestyle/files/2011/11/Roots-Gourmet-Restaurant-South-Africa-PHOTOGRAPHED-BY-Susan-Wong-2011-1.jpg'},
    { id: 2, title: 'African', servingSize: 44, totalWeight: "2 lbs", brand:'Temp', category: "temp", url:'http://www.capitalfm.co.ke/lifestyle/files/2011/11/Roots-Gourmet-Restaurant-South-Africa-PHOTOGRAPHED-BY-Susan-Wong-2011-1.jpg'},
    // { id: 3, title: 'Korean', numberOfRecipes: 23, averageNumberOfIngredientsPerRecipe: 6, continent:'Asia', averageCalories: 830, url: "https://media.timeout.com/images/100446787/image.jpg"},
    // { id: 4, title: 'Vietnamese', numberOfRecipes: 62, averageNumberOfIngredientsPerRecipe: 9, continent:'Vietnam', averageCalories: 632, url: "https://www.cirquedusoleil.com/las-vegas/assets/img/extras/restaurants_noodles.jpg"},
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



