'use strict';

function DressService($q, $http) {

    this.getDresses = function() {
        return $http.get('http://localhost:3001/api/dresses');
    };

    this.getDress = function(id) {
        return $http.get('http://localhost:3001/api/dress/' + id);
    };

    this.postDress = function(dress) {

        if (typeof dress.height !== 'number') {
            dress.height = Number(dress.height);
        }

        if (typeof dress.size !== 'number') {
            dress.size = Number(dress.size);
        }

        return $http.post('http://localhost:3001/api/dress/', dress);
    };

    this.deleteDress = function(dress) {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:3001/api/dress/' + dress.id,
        });
    };

    this.updateDress = function(id, infoDress) {
        return $http({
            method: 'PATCH',
            url: 'http://localhost:3001/api/dress/' + id,
            data: infoDress
        });
    }
};
