(function(){

    let app = angular.module('descriptionTab',[]);

    app.directive('descriptionTab', function(){
        return{
            restrict: 'E',
            templateUrl: 'partials/description-tab.html',
            controller: function(){
                console.log("descriptionTab")
            }
        }
    })
})();