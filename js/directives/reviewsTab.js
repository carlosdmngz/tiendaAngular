(function(){

    let app = angular.module('reviewTab',[]);

    app.directive('reviewTab', function(){
        return{
            restrict: 'E',
            templateUrl: 'partials/review-tab.html',
            controller: function(){
                console.log("reviewTab")
            }
        }
    })
})();