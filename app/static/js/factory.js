mainApp.factory('CuisineFetchFactory', function($http) { 
  return {
    fetch: function () {
      return $http.get('/api/cuisines/');
    },
    fetchAt: function (x) {
      return $http.get('/api/cuisines/' + x);
    },
    fetchRecipes: function (x) {
      return $http.get('/api/cuisine/' + x + '/recipes/');
    },
  };
});

mainApp.factory('RecipeFetchFactory', function($http) { 
  return {
    fetch: function () {
      return $http.get('/api/recipes/');
    },
    fetchAt: function (x) {
      return $http.get('/api/recipes/' + x);
    },
    fetchIngredients: function (x) {
      return $http.get('/api/recipe/' + x + '/ingredientInfo/');
    },
  };
});

mainApp.factory('IngredientFetchFactory', function($http) { 
  return {
    fetch: function () {
      return $http.get('/api/ingredients/');
    },
    fetchAt: function (x) {
      return $http.get('/api/ingredients/' + x);
    },
    fetchRecipes: function (x) {
      return $http.get('/api/ingredients/' + x + '/recipes/');
    },
  };
});

mainApp.factory('GithubFetchFactory', function($http) { 
  return $http.get('https://api.github.com/repos/Sethalopod/cs373-idb/stats/contributors');
});

mainApp.factory('IssueFetchFactory', function($http) { 
  return $http.get('https://api.github.com/repos/Sethalopod/cs373-idb/issues?per_page=500&state=all');
});

mainApp.factory('MetadataFetchFactory', function() {
  var siteCache = [
    { name: 'GGmate',                   link: 'http://ggmate.me/'},
    { name: 'Greek Mythology',          link: 'http://greekmythology.me/'},
    { name: 'Party People',             link: 'http://partypeople.me/'},
    { name: 'Video Game Character DB',  link: 'http://vgidb.me'},
    { name: 'LitDB',                    link: 'litdb.me'},
  ];
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
    name: 'Alan Ma', 
    login: 'wolfier',
    description: 'My name is Alan. I make data pretty and accessible for their respective audiences. When I\'m not developing, I am drawing and doing photography.',
    responsibilities: 'Full Stack', 
    instagram_url: 'https://www.instagram.com/packagedwolf/',
    linkedin_url: 'https://linkedin.com/in/alanmaut',
    pintrest_url: 'https://www.pinterest.com/alanwolfie/',
    tests: 0
  },
  {
    name:'Anthony Gallop', 
    login: 'agallop',
    description: 'My name is Anthony Gallop (That\'s -op, not -up. I\'m suing the Gallup Poll for pain and suffering). My hobbies include playing video games and making bad chat bots. ',
    responsibilities: 'Frontend', 
    tests: 0
  },
  {
    name: 'Jessica Lindee', 
    login: 'jesslindee', 
    description: 'Howdy! I\’m in my fourth year of college and my second year of studying computer science at the University of Texas at Austin. It took me a while to find the computer science path, but I\’m glad that I did! I like to sleep, play board games, watch Netflix, and camp out in the computer lab.',
    responsibilities:'Frontend', 
    tests: 0
  },
  {
    name:'Seth Milligan',
    login: 'Sethalopod',
    description: 'Hey everyone! My name is Seth and I’m a senior studying computer science at the University of Texas at Austin. Some of my hobbies include disc golf, playing board games, and listening to music.',
    responsibilities:'Backend',
    tests: 9
  },
  {
    name: 'Zachary Gilkerson', 
    login: 'zgilkerson',
    description: 'I am currently a senior CS student that is also pursuing a minor in business. My hobby is being on top of the bell curve.',
    responsibilities: 'Full Stack', 
    tests: 0
  },
  ];
  return {
    fetchAPI: function () {
      return apiCache;
    },
    fetchSite: function () {
      return siteCache;
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



