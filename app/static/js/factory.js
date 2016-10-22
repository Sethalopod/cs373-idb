mainApp.factory('CuisineFetchFactory', function() {
	var objectCache = [
  { id: 0, title: 'American', numberOfRecipes: 44, averageNumberOfIngredientsPerRecipe: 2, continent:'North America', averageCalories: 520, url:'https://spoonacular.com/recipeImages/Our-Perfect-Veggie-Burger-622900.jpg'},
  { id: 1, title: 'Chinese', numberOfRecipes: 21, averageNumberOfIngredientsPerRecipe: 13, continent:'Asia', averageCalories: 1904, url:'http://www.simplybridal.com/images/blog/eggroll-appetizers.jpg'},
  { id: 2, title: 'Mexican', numberOfRecipes: 93, averageNumberOfIngredientsPerRecipe: 9, continent:'North America', averageCalories: 738, url:'https://spoonacular.com/recipeImages/Crock-Pot-Beef-Carnitas-Tacos-668334.jpg'},
  { id: 3, title: 'Korean', numberOfRecipes: 23, averageNumberOfIngredientsPerRecipe: 6, continent:'Asia', averageCalories: 830, url: 'https://media.timeout.com/images/100446787/image.jpg'},
  { id: 4, title: 'Vietnamese', numberOfRecipes: 62, averageNumberOfIngredientsPerRecipe: 9, continent:'Vietnam', averageCalories: 632, url: 'https://www.cirquedusoleil.com/las-vegas/assets/img/extras/restaurants_noodles.jpg'},
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

mainApp.factory('IngredientFetchFactory', function() {
  var objectCache = [
  { id: 0, title: '365 Organic Cashews, Dry Roasted & Unsalted', servingSize: '1/4 cup (28g)', totalWeight: '10 oz', brand:'365 Everyday Value', category: 'Fruits / Nuts / Vegetables', url:'http://cdn.foodfacts.com/images/products/229041.jpg'},
  { id: 1, title: 'Almark Foods  Eggs', servingSize: '1 ea', totalWeight: '680 g', brand:'CFO', category: 'Eggs', url:'http://cdn.foodfacts.com//images//products//113078.jpg'},
  { id: 2, title: '505 Southwestern Green Chile, Medium, Diced, Flame Roasted', servingSize: '2 tbsp', totalWeight: '16 oz', brand:'505 Southwestern', category: 'Pickles, Relish & Sandwich Sides', url:'http://cdn.foodfacts.com//images//products//220321.png'},
  { id: 3, title: 'Korean', numberOfRecipes: 23, averageNumberOfIngredientsPerRecipe: 6, continent:'Asia', averageCalories: 830, url: 'https://media.timeout.com/images/100446787/image.jpg'},
  { id: 4, title: 'Vietnamese', numberOfRecipes: 62, averageNumberOfIngredientsPerRecipe: 9, continent:'Vietnam', averageCalories: 632, url: 'https://www.cirquedusoleil.com/las-vegas/assets/img/extras/restaurants_noodles.jpg'},
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
  return {
    fetch: function () {
      return objectCache;
    },
    fetchAt: function (x) {
      return objectCache[x];
    }
  };
});

mainApp.factory('GithubFetchFactory', function($http) { 
  return $http.get('https://api.github.com/repos/Sethalopod/cs373-idb/contributors');
});

mainApp.factory('MetadataFetchFactory', function() {
  var apiCache = [
    { name: 'FoodFacts',            link: 'https://api.foodfacts.com/'},
    { name: 'Spoonacular',          link: 'https://market.mashape.com/spoonacular/recipe-food-nutrition'},
    { name: 'Github Issue Tracker', link: 'https://github.com/Sethalopod/cs373-idb/issues'},
    { name: 'Repository',           link: 'https://github.com/Sethalopod/cs373-idb'},
    { name: 'Wiki',                 link: 'https://github.com/Sethalopod/cs373-idb/wiki'}
  ];
  var projectCache = [
    { name: 'Apiary',               link: 'http://docs.boilerpl8.apiary.io/'},
    { name: 'Github Issue Tracker', link: 'https://github.com/Sethalopod/cs373-idb/issues'},
    { name: 'Github Repository',    link: 'https://github.com/Sethalopod/cs373-idb'},
    { name: 'Github Wiki',          link: 'https://github.com/Sethalopod/cs373-idb/wiki'},
  ];
  var toolCache = [
    { name: 'AngularJS',   link: 'https://angularjs.org/'},
    { name: 'BootstrapJS', link: 'http://getbootstrap.com/'},
    { name: 'Flask',       link: 'http://flask.pocoo.org/'},
    { name: 'SQLAlchemy',  link: 'http://www.sqlalchemy.org/'},
    { name: 'yUML',        link: 'http://yuml.me/'}
  ];
  var memberCache = [
  {
    name:'Anthony Gallop', 
    login: 'agallop',
    description: 'My name is Anthony Gallop (That\'s -op, not -up. I\'m suing the Gallup Poll for pain and suffering). My hobbies include playing video games and making bad chat bots. ',
    responsibilities: 'Frontend', 
    issues: 1, 
    tests: 0
  },
  {
    name: 'Alan Ma', 
    login: 'wolfier',
    description: 'My name is Alan. I make data pretty and accessible for their respective audiences. When I\'m not developing, I am drawing and doing photography.',
    responsibilities: 'Full Stack', 
    instagram_url: 'https://www.instagram.com/packagedwolf/',
    twitter_url: 'https://twitter.com/packagedwolf',
    linkedin_url: 'https://linkedin.com/in/alanmaut',
    pintrest_url: 'https://www.pinterest.com/alanwolfie/',
    reddit_url: 'https://www.reddit.com/user/wrywolf',
    issues: 2, 
    tests: 0
  },
  {
    name: 'Jessica Lindee', 
    login: 'jesslindee', 
    description: 'Howdy! I\’m in my fourth year of college and my second year of studying computer science at the University of Texas at Austin. It took me a while to find the computer science path, but I\’m glad that I did! I like to sleep, play board games, watch Netflix, and camp out in the computer lab.',
    responsibilities:'Frontend', 
    issues: 4, 
    tests: 0
  },
  {
    name:'Seth Milligan',
    login: 'Sethalopod',
    description: 'Hey everyone! My name is Seth and I’m a senior studying computer science at the University of Texas at Austin. Some of my hobbies include disc golf, playing board games, and listening to music.',
    responsibilities:'Backend',
    issues: 2, 
    tests: 0
  },
  {
    name: 'Zach Gilkerson', 
    login: 'zgilkerson',
    description: 'I am currently a senior CS student that is also pursuing a minor in business. My hobby is being on top of the bell curve.',
    responsibilities: 'Full Stack', 
    issues: 9, 
    tests: 0
  },
  ];
  return {
    fetchAPI: function () {
      return apiCache;
    },
    fetchProject: function () {
      return projectCache;
    },
    fetchTool: function () {
      return toolCache;
    },
    fetchMember: function () {
      return memberCache;
    }
  };
});



