'use strict';

function RentService($q, $http) {

    this.getRents = function() {
        return $http.get('http://localhost:3001/api/rents');
    };

    this.getRent = function(id) {
        return $http.get('http://localhost:3001/api/rent/' + id);
    };

    this.postRent = function(rent) {
        return $http.post('http://localhost:3001/api/rent/', rent);
    };

    this.deleteRent = function(rent) {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:3001/api/rent/' + rent.id,
        });
    };

    this.updateDress = function(id, infoRent) {
        return $http({
            method: 'PATCH',
            url: 'http://localhost:3001/api/rent/' + id,
            data: infoRent
        });
    }
};
