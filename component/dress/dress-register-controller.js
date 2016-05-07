'use strict';

function dressRegisterController(dressService) {
    var selectedId = null;
    var dress = null;
    var self = this;

    self.$routerOnActivate = function(next) {
        dressService.getDresses().then(function(result) {
            selectedId = next.params.id;
            self.dress = result.data.dress;
        });
    };

    self.register = function(dress) {
        dressService.postDress(dress).then(function(result) {
            self.dress.push(result.data.dress);
        });
    };

    self.del = function(dress) {
        dressService.deleteDress(dress).then(function(result) {
            if (result.status === 200) {
                self.dress = self.dress.filter(function(dressList) {
                    return dressList.id !== dress.id;
                });
            }
        });
    };

};
