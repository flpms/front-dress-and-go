'use strict';

function dressRentController(dressService, clientService, rentService) {
    var selectedId = null;
    var self = this;
    self.rentData = null;

    self.$routerOnActivate = function(next) {
        selectedId = next.params.id;

        clientService.getClients().then(function(clientResult) {
            self.clients = clientResult.data.clients;
            self.rentData = {};
            dressService.getDress(selectedId).then(function(result) {
                self.dress = result.data.dress;
                self.rentData.dressId = Number(selectedId);
            });
        });
    };

    self.selectClient = function(client) {
        self.rentData.clientId =  Number(client.id);
    };

    self.isSelected = function(client) {
        return self.rentData.clientId === client.id;
    };

    self.rent = function(rentData) {
        if (!self.isSelected) return;

        rentData.bookingDate = moment(rentData.bookingDate).format(),
        rentData.devolutionDate = moment(rentData.bookingDate).add((rentData.devolutionDate || 4), 'd').format();

        rentService.postRent(rentData).then(function(result) {
            self.rentData.order = result.data.orderDate;
            self.cancel();
        });
    };

    self.cancel = function() {
        self.$router.navigate(['Dresses']);
    }
};
