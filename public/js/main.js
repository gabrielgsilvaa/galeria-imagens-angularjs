// modulo principal
angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos']) // 'ngResource'
 
.config(function($routeProvider, $locationProvider){ 
	
	// do ngRoute
	// locationProvider ativa o metodo da API removendo #/ na consulta --> necessário configurar o back-end

	$locationProvider.html5Mode(true);

	$routeProvider.when('/fotos', {
		templateUrl : 'partials/principal.html',
		controller : 'FotosController'
	});

	$routeProvider.when('/fotos/new', {
		templateUrl : 'partials/foto.html',
		controller : 'FotoController'
	});

	$routeProvider.when('/fotos/edit/:fotoId', {
		templateUrl : 'partials/foto.html',
		controller : 'FotoController'
	});

	$routeProvider.otherwise({redirectTo: '/fotos'})

});
