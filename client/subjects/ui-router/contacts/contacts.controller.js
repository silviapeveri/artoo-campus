angular.module('artoo').controller('ContactsCtrl', function($state, color) {
    //console.log('contacts controler now runs');
    this.color = $state.current.data.color; 
    this.resolveColor = color;
   
})