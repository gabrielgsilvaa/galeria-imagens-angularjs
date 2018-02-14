// public/js/controllers/fotos-controller.js

angular.module('alurapic').controller('FotosController', function($scope, recursoFoto){ //$http, $resource,

	$scope.fotos 	= [];
	$scope.filtro 	= '';
	$scope.mensagem = '';


	//var recursoFoto = $resource('v1/fotos/:fotoId');
	recursoFoto.query(function(fotos){
		$scope.fotos = fotos;
	}, function(erro){
		console.log(erro)
	});

	/*

		desativado para o uso com resource

		$http.get('v1/fotos')
		.success(function(retorno){

			$scope.fotos = retorno;

		})
		.error(function(erro){
			console.log(erro);
		});
	*/

	/*
		Outra forma de requisição

		var promise = $http.get('v1/fotos');
		promise.then(function(retorno){
			$scope.fotos = retorno.data;
		}).catch(function(error){
			console.log(error);
		});
	*/

	$scope.remover = function(foto){

		recursoFoto.delete({fotoId : foto._id}, function(){
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = 'Foto "' + foto.titulo + '"" removido com sucesso';
		}, function(erro){
			console.log(erro);
			$scope.mensagem = 'Não foi possível remover a foto "' + foto.titulo + '"';
		});	

		/*
			desativado para o uso com resource

			$http.delete('v1/fotos/' + foto._id)
			.success(function(){
				var indiceFoto = $scope.fotos.indexOf(foto);
				$scope.fotos.splice(indiceFoto, 1);
				$scope.mensagem = 'Foto "' + foto.titulo + '"" removido com sucesso';
			})
			.error(function(erro){
				console.log(erro);
				$scope.mensagem = 'Não foi possível remover a foto "' + foto.titulo + '"';
			});
		*/

	};

});