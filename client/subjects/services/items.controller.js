angular.module('artoo').controller('ItemsCtrl', ($scope, ItemsSrv) => {
    
    $scope.items = ItemsSrv.get(); // viene runnata nell'index appena invoco il controller quindi se cambiano gli items rimango fregata
    
    $scope.getItems = ItemsSrv.get; // utili se ho bisogno di passare dei parametri
    
    $scope.ItemsSrv = ItemsSrv;
    
});