angular.module('artoo', [
  'appbar',
  'ngMaterial',
  'ngAnimate',
  'ngAria',
  'ngMessages',
])
  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({name: 'Angular Material', url: 'subjects/material'});
  })
  
  .config(($mdThemingProvider) => {
    $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .warnPalette('amber')
    .accentPalette('blue')
    .backgroundPalette('teal');
  });