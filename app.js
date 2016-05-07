'use strict';

var dressApp = angular.module('dressApp', [
    'ngComponentRouter',
    'ui.utils.masks',
    'component.clients',
    'component.dress'
]);

dressApp.config(function($locationProvider) {
    //$locationProvider.html5Mode(true);
});

dressApp.value('$routerRootComponent', 'app');

dressApp.component('app',  {
    template: '<nav class="block-2"><ul>\n' +
        '  <li><a ng-link="[\'/Client/Clients\']">Clientes</a></li>\n' +
        '  <li><a ng-link="[\'/Dress/Dresses\']">Vestidos</a></li>\n' +
        '</ul></nav><ng-outlet class="block-11 content"></ng-outlet>\n',
    $routeConfig: [
        { path: '/clientes/...', component: 'clientsOps', name: 'Client', useAsDefault: true },
        { path: '/vestidos/...', component: 'dressOps', name: 'Dress' }
    ]
});
