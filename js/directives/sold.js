(function(){

    let app = angular.module('sold',[]);

    app.directive("sold", function(){
        return{
            restrict: 'E',
            templateUrl: 'partials/soldP.html',
            controller: function(){
                console.log("sold")
            }
        }
    })
})();