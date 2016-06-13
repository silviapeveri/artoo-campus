angular.module('artoo').component('items', {
    bindings: {
        typology: '@',
    },
    controller: 'ItemsCtrl',
    controllerAs: 'ItemsCtrl',
    templateUrl:'subjects/components/items/items.html',
});

