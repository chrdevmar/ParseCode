//create module
var parseCode = angular.module('parseCode', ['ngRoute']);

//configure routes
parseCode.config(function($routeProvider) {

		//home
		$routeProvider.when('/home', {
		templateUrl : 'views/home.html',
		controller  : 'homeController'
		});

		//me
		$routeProvider.when('/me', {
		templateUrl : 'views/me.html',
		controller  : 'meController'
		});

		//projects
		$routeProvider.when('/projects', {
		templateUrl : 'views/projects.html',
		controller  : 'projectController'
		});

		$routeProvider.otherwise({
        redirectTo: '/home'
      });
});

//home controller
parseCode.controller('homeController', function($scope){
	$scope.message = 'this is the home view';

	$scope.sayHi = function(){
		window.alert("hi");
	}
});

//me controller
parseCode.controller('meController', function($scope){
	$scope.message = "this is the me view";
});

//projects controller
parseCode.controller('projectController', function($scope){
	$scope.message = "this is the projects view";
});

$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});
