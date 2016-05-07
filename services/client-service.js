'use strict';

function ClientService($q, $http) {

    this.getClients = function() {
        return $http.get('http://192.168.0.10:3001/api/clients');
    };

    this.getClient = function(id) {
        return $http.get('http://192.168.0.10:3001/api/client/' + id);
    };

    this.postClient = function(client) {
        return $http.post('http://192.168.0.10:3001/api/client/', client);
    };

    this.deleteClient = function(client) {
        return $http({
            method: 'DELETE',
            url: 'http://192.168.0.10:3001/api/client/' + client.email + '?id=' + client.id,
        });
    };

    this.updateClient = function(client) {

        return $http({
            method: 'PATCH',
            url: 'http://192.168.0.10:3001/api/client/' + client.email,
            data: client
        });
    }
};
