'use strict';

function ClientService($q, $http) {

    this.getClients = function() {
        return $http.get('http://localhost:3001/api/clients');
    };

    this.getClient = function(id) {
        return $http.get('http://localhost:3001/api/client/' + id);
    };

    this.postClient = function(client) {
        return $http.post('http://localhost:3001/api/client/', client);
    };

    this.deleteClient = function(client) {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:3001/api/client/' + client.email + '?id=' + client.id,
        });
    };

    this.updateClient = function(client) {

        return $http({
            method: 'PATCH',
            url: 'http://localhost:3001/api/client/' + client.email,
            data: client
        });
    }
};
