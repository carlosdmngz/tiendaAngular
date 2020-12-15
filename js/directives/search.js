(function(){
    
    let app = angular.module('search',[])

    app.directive("search",function(){
        return{
            restrict: "E",
            templateUrl: "partials/Search.html",
            controller: function(){
                console.log("search")
            },
            controllerAs: "Sch"
        }
    })

})();