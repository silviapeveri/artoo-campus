angular.module('artoo').controller('ItemsCtrl', function($scope, ItemsSrv){
    ItemsSrv.query().then((items) => {
        console.log('item');
    }
    );
       
    newItem = ItemsSrv.create(); 
    newItem.name = "Shuriken";
    newItem.$save().then((data) =>{
        console.info(data);
    }).catch((err) => {
        console.error(err);
    });
});