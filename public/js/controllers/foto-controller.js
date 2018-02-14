angular.module('alurapic').controller('FotoController', function($scope, $routeParams, recursoFoto, cadastroDeFotos){ // $http, $resource, // 

	$scope.foto = {};
	$scope.mensagem = "";

	/*
		var recursoFoto = $resource('/v1/fotos/:fotoId', null, {
			update : {
				method: 'PUT'
			}
		});
	*/

	if ($routeParams.fotoId){

		recursoFoto.get({fotoId : $routeParams.fotoId}, function(foto){
			$scope.foto = foto;
		}, function(erro){
			console.log(erro);
		});

	}

	/*

		desativado para uso do resource 

		if ($routeParams.fotoId){
			$http.get('v1/fotos/' + $routeParams.fotoId)
			.success(function(foto){
				$scope.foto = foto;
			})
			.error(function(erro){
				console.log('Não foi possível obter a foto');
				console.log(erro);
			});
		}
	
	*/

	$scope.submeter = function(){

		if ($scope.formulario.$valid) {


			cadastroDeFotos.cadastrar($scope.foto)
			.then(function(dados){
				$scope.mensagem = dados.mensagem;
				if(dados.inclusao) {
					$scope.foto = {}
					$scope.formulario.$setPristine();
				}
                //$scope.focado = true; 
			})
			.catch(function(erro){
				$scope.mensagem = dados.mensagem;
			});


			/* 
			desativado para o uso de servicos

			if($scope.foto._id){

				recursoFoto.update({fotoId : $scope.foto._id}, $scope.foto, function(){
					$scope.mensagem = "Foto ''"+ $scope.foto.titulo +"'' alterada com sucesso";
				}, function(erro){
					console.log(erro);
					$scope.mensagem = "Não foi possível alterar a foto ''"+ $scope.foto.titulo +"''";

				});
					
				desativado para uso do resource 

				$http.put('v1/fotos/'+$scope.foto._id, $scope.foto)
				.success(function(){
					$scope.mensagem = "Foto ''"+ $scope.foto.titulo +"'' alterada com sucesso";
				})
				.error(function(erro){
					console.log(erro);
					$scope.mensagem = "Não foi possível alterar a foto ''"+ $scope.foto.titulo +"''";
				})

			}else{

				recursoFoto.save($scope.foto, function(){
					$scope.foto = {};
					$scope.formulario.$setPristine();
					$scope.mensagem = "Foto cadastrada com sucesso";
				}, function(erro){
					console.log(erro);
					$scope.mensagem = "Não foi possível cadastrar a foto";
					
				})

				desativado para uso do resource 

				$http.post('v1/fotos', $scope.foto)
				.success(function(){
					$scope.foto = {};
					$scope.formulario.$setPristine();
					$scope.mensagem = "Foto cadastrada com sucesso";
				}).error(function(erro){
					console.log(erro);
					$scope.mensagem = "Não foi possível cadastrar a foto";
				});
				
			}*/

		}

	};



});