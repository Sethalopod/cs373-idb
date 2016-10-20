mainApp.factory('FetchFactory', function() {
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
			bio:'yooo',
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

