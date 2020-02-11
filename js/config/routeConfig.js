angular.module("exemplosAngular").config(function ($routeProvider) {
	$routeProvider.when("/index", {
		templateUrl: "view/menu.html",
		controller: "menuCtrl"
	});
	$routeProvider.when("/validar", {
		templateUrl: "view/validar.html",
		controller: "validarCtrl"
	});
	$routeProvider.otherwise({redirectTo: "/index"});
});

