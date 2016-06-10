angular.module('artoo').directive('cssAdder', function(){
    return {
        restrict: 'A',
        scope: {
            cssAdder : '=',
        },
        link: function (scope, elem){
            var options = scope.cssAdder || {};
            
            var color = options.color || 'grey';
            var thickness = options.thickness || '1px';
            var typology = options.typology || 'solid';
            
            elem.css('border', [thickness, typology, color].join(' '));
            //console.info(elem);
            
        },
    };
});