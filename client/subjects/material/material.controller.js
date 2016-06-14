angular.module('artoo').controller('MaterialCtrl', function($scope){
    $scope.minDate = new Date(2016,6,17);
    
    $scope.onlyWeekends = function(date){
        var day = date.getDay();
        return day === 0 || day === 6;
    }
    
});