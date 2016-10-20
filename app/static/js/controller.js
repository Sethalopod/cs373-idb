mainApp.controller('CuisinesCtrl',
    ['$scope', 'FetchFactory', 
    function($scope, FetchFactory) {
        $scope.sortType     = 'title';
        $scope.sortReverse  = false; 
        $scope.cuisines     = FetchFactory.fetch()
    }]);

mainApp.controller('CuisineDetailCtrl',
    ['$scope', '$routeParams', 'FetchFactory',
    function($scope, $routeParams, FetchFactory) {
        $scope.cuisine = FetchFactory.fetchAt($routeParams['cuisineId']);
    }]);

mainApp.controller('AboutCtrl',
    [ '$scope', 'MemberFactory',
    function($scope, MemberFactory) {
        console.log("Member Factory fetch start");
        members = MemberFactory.fetch();
        $scope.seth = members[0];
        $scope.alan = members[1];
        $scope.anthony = members[2];
        $scope.jessica = members[3];
        $scope.zach = members[4];
        console.log("Member Factory fetch end");
    }]
).directive('memberDetail', function() {
  return {
    scope: {
      info: '=info'
    },
    templateUrl: '/static/partials/memberDetail.html'
  }
});;

// Dependencies must be in the same order as the function paramters...
