'use strict';

function dressUpdateController(dressService) {
    var selectedId = null;
    var dress = null;
    var self = this;

    self.sizes = [34, 36, 38, 40, 42];

    self.$routerOnActivate = function(next) {
        selectedId = next.params.id;

        dressService.getDress(selectedId).then(function(result) {
            if (typeof result.data.dress.size !== 'number') {
                result.data.dress.size = Number(result.data.dress.size);
            }

            self.dress = result.data.dress;
        });
    };

    self.update = function(dress) {
        var id = dress.id;

        if (typeof dress.size !== 'number') {
            dress.size = Number(dress.size);
        }

        if (typeof dress.height !== 'number') {
            dress.height = Number(dress.height);
        }

        delete dress.id;

        dressService.updateDress(id, dress).then(function(result) {
            self.cancel();
        });
    };

    self.cancel = function() {
        self.$router.navigate(['Dresses']);
    };
};
