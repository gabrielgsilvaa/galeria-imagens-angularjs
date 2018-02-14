// modulo de diretivas

angular.module('minhasDiretivas', [])

.directive('meuPainel', function(){

    //ddo = directive definition object
    var ddo = {};

    ddo.restrict = "AE"

    ddo.scope = {
        titulo : '@titulo'
    };

    ddo.transclude = true;

    ddo.templateUrl = 'js/directives/meu-painel.html';

    /*
    ddo.template = 
        '<div class="panel panel-default">'
    +   '   <div class="panel-heading">'
    +   '        <h3 class="panel-title text-center">{{titulo}}</h3> '
    +   '   </div>'
    +   '   <div class="panel-body" ng-transclude>'
    +   '   </div>'
    +   '</div>'
    */


    return ddo;
})

.directive('minhaFoto', function(){

    var ddo = {};

    ddo.restrict = 'AE';

    ddo.scope = {
        titulo : '@',
        url : '@'
    }

    //ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';           
    ddo.templateUrl = 'js/directives/minha-foto.html';

    return ddo;
})

.directive('meuBotaoPerigo', function(){

    var ddo = {};

    ddo.restrict = 'E';

    ddo.scope = {
        nome : '@',
        acao : '&'
    };

    ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';

    return ddo;

})

/* 


"camelcase" --> meuPainel = <meu-painel> </meu-painel>

E = elemento = <meu-painel> </meu-painel> 
A = atributo = <... titulo = "texto"> </...>

*/


.directive('meuFocus', function(){

    var ddo = {};
    ddo.restrict = "A";

    /*
    ddo.scope = {
        focado : '='
    };
    */

    ddo.link = function(scope, element){ // watchers | scope da diretiva
        /*
        scope.$watch('focado', function(){
            if(scope.focado){
                element[0].focus();
                scope.focado = false;
            }
        });
        */

        scope.$on('fotoCadastrada', function(){
            element[0].focus();
        }); 

    }

    return ddo;

})


.directive('meusTitulos', function() {
        var ddo = {};
        ddo.restrict = 'E';
        ddo.template = '<ul class="list-group"><li class="list-group-item" ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
        ddo.controller = function($scope, recursoFoto){
            recursoFoto.query(function(fotos) {
                $scope.titulos = fotos.map(function(foto) {
                    return foto.titulo;
                });  
            });
        }

        return ddo;
    });










