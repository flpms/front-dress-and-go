'use strict';

function clientRegisterController(clientService) {
    var selectedId = null;
    var clients = null;
    var self = this;

    self.states = [
        { name: 'Acre', uf: 'AC' },
        { name: 'Alagoas', uf: 'AL' },
        { name: 'Amapá', uf: 'AP' },
        { name: 'Amazonas', uf: 'AM' },
        { name: 'Bahia', uf: 'BA' },
        { name: 'Ceará', uf: 'CE' },
        { name: 'Distrito Federal', uf: 'DF' },
        { name: 'Espírito Santo', uf: 'ES' },
        { name: 'Goiás', uf: 'GO' },
        { name: 'Maranhão', uf: 'MA' },
        { name: 'Mato Grosso', uf: 'MT' },
        { name: 'Mato Grosso do Sul', uf: 'MS' },
        { name: 'Minas Gerais', uf: 'MG' },
        { name: 'Pará ', uf: 'PA' },
        { name: 'Paraíba', uf: 'PB' },
        { name: 'Paraná', uf: 'PR' },
        { name: 'Pernambuco', uf: 'PE' },
        { name: 'Piauí', uf: 'PI' },
        { name: 'Rio de Janeiro', uf: 'RJ' },
        { name: 'Rio Grande do Norte', uf: 'RN' },
        { name: 'Rio Grande do Sul', uf: 'RS' },
        { name: 'Rondônia', uf: 'RO' },
        { name: 'Roraima', uf: 'RR' },
        { name: 'Santa Catarina', uf: 'SC' },
        { name: 'São Paulo', uf: 'SP' },
        { name: 'Sergipe', uf: 'SE' },
        { name: 'Tocantins', uf: 'TO' }
    ];



    self.$routerOnActivate = function(next) {
        clientService.getClients().then(function(result) {
            selectedId = next.params.email;
            self.clients = result.data.clients;
        });
    };

    self.register = function(client) {

        if (typeof client.cellPhone === 'string') {
            client.cellPhone = Number(client.cellPhone.replace('(\-|\ )', ''));
        }

        client.size = Number(client.size);
        client.state = client.stateObj.uf;

        delete client.stateObj;

        clientService.postClient(client).then(function(result) {
            self.clients.push(result.data.client);
        });
    };

    self.del = function(client) {
        clientService.deleteClient(client).then(function(result) {
            if (result.status === 200) {
                self.clients = self.clients.filter(function(clientList) {
                    return clientList.email !== client.email;
                });
            }
        });
    };
};
