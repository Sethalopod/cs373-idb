mainApp.controller('CuisinesCtrl', function($scope) {
    $scope.sortType     = 'title';
    $scope.sortReverse  = false; 

    $scope.cuisines = [
    { title: 'African', numberOfRecipes: 44, averageNumberOfIngredientsPerRecipe: 2, continent:'Africa', averageCalories: 520},
    { title: 'Chinese', numberOfRecipes: 21, averageNumberOfIngredientsPerRecipe: 13, continent:'Asia', averageCalories: 1904},
    { title: 'Japanese', numberOfRecipes: 93, averageNumberOfIngredientsPerRecipe: 9, continent:'Japan', averageCalories: 738},
    { title: 'korean', numberOfRecipes: 23, averageNumberOfIngredientsPerRecipe: 6, continent:'Asia', averageCalories: 830},
    { title: 'Vietnamese', numberOfRecipes: 62, averageNumberOfIngredientsPerRecipe: 9, continent:'Vietnam', averageCalories: 632},
    ];
});

mainApp.controller('CuisineDetailCtrl', ['FetchService', function($scope, $routeParams) {
    $scope.cuisine = FetchService[$routeParams];
}]);