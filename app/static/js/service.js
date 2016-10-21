mainApp.factory('CuisineFetchFactory', function() {
	var objectCache = [
		{ id: 0, title: 'American', numberOfRecipes: 44, averageNumberOfIngredientsPerRecipe: 2, continent:'North America', averageCalories: 520, url:'https://spoonacular.com/recipeImages/Our-Perfect-Veggie-Burger-622900.jpg'},
		{ id: 1, title: 'Chinese', numberOfRecipes: 21, averageNumberOfIngredientsPerRecipe: 13, continent:'Asia', averageCalories: 1904, url:'http://www.simplybridal.com/images/blog/eggroll-appetizers.jpg'},
		{ id: 2, title: 'Mexican', numberOfRecipes: 93, averageNumberOfIngredientsPerRecipe: 9, continent:'North America', averageCalories: 738, url:'https://spoonacular.com/recipeImages/Crock-Pot-Beef-Carnitas-Tacos-668334.jpg'},
		// { id: 3, title: 'Korean', numberOfRecipes: 23, averageNumberOfIngredientsPerRecipe: 6, continent:'Asia', averageCalories: 830, url: 'https://media.timeout.com/images/100446787/image.jpg'},
		// { id: 4, title: 'Vietnamese', numberOfRecipes: 62, averageNumberOfIngredientsPerRecipe: 9, continent:'Vietnam', averageCalories: 632, url: 'https://www.cirquedusoleil.com/las-vegas/assets/img/extras/restaurants_noodles.jpg'},
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

mainApp.factory('MemberFactory', function() {
	var objectCache = [
		{
			id: 0, 
			name:'Seth Milligan',
			image: '/static/images/seth.jpeg', 
			bio:'Hey everyone! My name is Seth and I’m a senior studying computer science at the University of Texas at Austin. Some of my hobbies include disc golf, playing board games, and listening to music.',
			responsibilities:'Backend', 
			commits: 12, 
			issues:3, 
			tests:2
		},
		{
			id: 1, 
			name:'Alan Ma', 
			image: '/static/images/alan.jpg',
			bio:'hi howdy hello i don\'t share feelings',
			responsibilities:'Full Stack', 
			commits: 12, 
			issues:3, 
			tests:2
		},
		{
			id: 2, 
			name:'Anthony Gallop', 
			image: '/static/images/anthony.jpeg',
			bio:'My name is Anthony Gallop (That\'s -op, not -up. I\'m suing the Gallup Poll for pain and suffering). My hobbies include playing video games and making bad chat bots. ',
			responsibilities:'Frontend', 
			commits: 12, 
			issues:3, 
			tests:2
		},
		{
			id: 3, 
			image: '/static/images/jessica.jpeg',
			name:'Jessica Lindee', 
			bio:'hi. 2spooky4me',
			responsibilities:'wut', 
			commits: 12, 
			issues:3, 
			tests:2
		},
		{
			id: 4, 
			image:'/static/images/zachary.jpg',
			name:'Zach Gilkerson', 
			bio:'I am currently a senior CS student that is also pursuing a minor in business. My hobby is being on top of the bell curve.',
			responsibilities:'1', 
			commits: 12, 
			issues:3, 
			tests:2
		}
	];
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
    { id: 0, title: 'Salvaging Dry Rice: Fried Rice', readyInMinutes: 20, servings: 4, calories: 247, numberOfSteps: 6,steps: 'Beat eggs with salt and pepper.Fry onions in oil until soft.Add eggs and cook until they are lightly scrambled.Remove the eggs and onion from the pan and set aside.Add 2 tablespoons oil to the pan, when the oil is hot add the rice and stir fry for 3- 4 minutes.Add soy sauce, egg, and vegetables. Mix thoroughly and cook until the vegetables are hot', url:'https://spoonacular.com/recipeImages/Salvaging-Dry-Rice--Fried-Rice-532513.jpg'},
    { id: 1, title: 'Our Perfect Veggie Burger', readyInMinutes: 40, servings: 8, calories:278, numberOfSteps: 4,steps: '1. Preheat oven to 350F (if baking). In a large skillet, saut onions and garlic in 1/2 tbsp oil. Mix your flax egg together in a small bowl and set aside for at least 10 mins while you prepare the rest of the ingredients.2. Place all ingredients (except spices and salt) into a large mixing bowl and stir very well. Now, add seasonings and salt to taste.3. With slightly wet hands, shape dough into patties. Pack dough tightly as this will help it stick together. I made 8 medium patties.4. Cooking methods: You can fry the burgers in a bit of oil on a skillet over medium heat for about 5 minutes on each side. If baking in the oven, bake for 25-30 mins (15-17 minutes on each side) at 350F, until golden and crisp. For the BBQ, pre-bake the burgers for about 15 minutes in oven before placing on a pre-heated grill until golden and crisp on each side. Our preferred method of cooking was frying in the skillet!!GF Note: To make these burgers gluten-free, use certified GF oats, GF Tamari, and gluten-free breadcrumbs.', url:'https://spoonacular.com/recipeImages/Our-Perfect-Veggie-Burger-622900.jpg'},
    { id: 2, title: 'Crock Pot Beef Carnitas Tacos', readyInMinutes: 480, servings: 6, calories: 298, numberOfSteps: 3 ,steps: 'Mix together all spices in a small bowl. Rub the spices all over your flank steakbe generous here! Then, place your steak at the bottom of your crock pot.  Cover the steak with the chopped onions, bell peppers and jalapeno pepper. Turn heat on LOW and cook for 8 hours.  After 8 hours, remove meat from crock pot and shred with a fork. It should be incredibly easy to shred. You can either stick the shredded meat back in the pot for another hour or serve as is.  To serve, heat your corn tortillas in a skillet on the stove. Spoon some carnitas on a tortilla then top with salsa, avocado, cilantro and a squeeze of lime.  Enjoy with a margarita for best result.  Time:  active time:10 min. total time:8 hours', url:'https://spoonacular.com/recipeImages/Crock-Pot-Beef-Carnitas-Tacos-668334.jpg'},
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
    { id: 0, title: '365 Organic Cashews, Dry Roasted & Unsalted', servingSize: '1/4 cup (28g)', totalWeight: '10 oz', brand:'365 Everyday Value', category: 'Fruits / Nuts / Vegetables', url:'http://cdn.foodfacts.com/images/products/229041.jpg'},
    { id: 1, title: 'Almark Foods  Eggs', servingSize: '1 ea', totalWeight: '680 g', brand:'CFO', category: 'Eggs', url:'http://cdn.foodfacts.com//images//products//113078.jpg'},
    { id: 2, title: '505 Southwestern Green Chile, Medium, Diced, Flame Roasted', servingSize: '2 tbsp', totalWeight: '16 oz', brand:'505 Southwestern', category: 'Pickles, Relish & Sandwich Sides', url:'http://cdn.foodfacts.com//images//products//220321.png'},
    // { id: 3, title: 'Korean', numberOfRecipes: 23, averageNumberOfIngredientsPerRecipe: 6, continent:'Asia', averageCalories: 830, url: 'https://media.timeout.com/images/100446787/image.jpg'},
    // { id: 4, title: 'Vietnamese', numberOfRecipes: 62, averageNumberOfIngredientsPerRecipe: 9, continent:'Vietnam', averageCalories: 632, url: 'https://www.cirquedusoleil.com/las-vegas/assets/img/extras/restaurants_noodles.jpg'},
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



