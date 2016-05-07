'use strict';

var client = angular.module('component.clients', []);
client.service('clientService', ClientService);

client.component('clientsOps', {
    template: '<h2 class="block-9">Clientes</h2><ng-outlet></ng-outlet>',
    $routeConfig: [
        { path: '/', name: 'Clients', component: 'clientList', useAsDefault: true },
        { path: '/update/:email', name: 'ClientUpdate', component: 'clientUpdate' }
    ]
});

client.component('clientList', {
    templateUrl: 'component/client/client-register.html',
    controller: clientRegisterController,
    $canActivate: function($nextInstruction, $prevInstruction) {
        console.log('$canActivate', arguments);
    }
});

client.component('clientUpdate', {
    templateUrl: 'component/client/client-update.html',
    controller: clientUpdateController,
    bindings: { $router: '<' },
});
