'use strict';

var dress = angular.module('component.dress', []);

dress.service('dressService', DressService);
dress.service('clientService', ClientService);
dress.service('rentService', RentService);

dress.component('dressOps', {
    template: '<h2 class="block-9">Vestidos</h2><ng-outlet class="block-13"></ng-outlet>',
    $routeConfig: [
        { path: '/', name: 'Dresses', component: 'dressList', useAsDefault: true },
        { path: '/update/:id', name: 'DressUpdate', component: 'dressUpdate' },
        { path: '/rent/:id', name: 'DressRent', component: 'dressRent' }
    ]
});

dress.component('dressList', {
    templateUrl: 'component/dress/dress-register.html',
    controller: dressRegisterController,
    $canActivate: function($nextInstruction, $prevInstruction) {
        console.log('$canActivate', arguments);
    }
});

dress.component('dressUpdate', {
    templateUrl: 'component/dress/dress-update.html',
    controller: dressUpdateController,
    bindings: { $router: '<' },
});

dress.component('dressRent', {
    templateUrl: 'component/dress/dress-rent.html',
    controller: dressRentController,
    bindings: { $router: '<' },
});
