'use strict';

function clientUpdateController(clientService) {
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

    self.sizes = [34, 36, 38, 40, 42];

    self.$routerOnActivate = function(next) {
        selectedId = next.params.email;

        clientService.getClient(selectedId).then(function(result) {
            var client = result.data.client;

            if (typeof client.cellPhone === 'string') {
                client.cellPhone = Number(client.cellPhone.replace('(\-|\ )', ''));
            }

            if (typeof client.addressNumber === 'string') {
                client.addressNumber = Number(client.addressNumber);
            }

            if (client.postalCode.toString().length < 8) {

                var postalCode = client.postalCode.toString();

                for (var i = 0; postalCode.length < 8; i++) {
                    postalCode = '0' + postalCode.toString();
                }

                client.postalCode = postalCode.toString();
            }

            self.client = client;
        });
    };

    self.update = function(client) {
        var _client = JSON.parse(JSON.stringify(client));

        if (typeof _client.cellPhone === 'string') {
            _client.cellPhone = Number(_client.cellPhone.replace('(\-|\ )', ''));
        }

        _client.size = Number(_client.size);

        delete _client.id;
        delete _client.postalCode;
        delete _client.street;
        delete _client.city;
        delete _client.state;

        clientService.updateClient(_client).then(function(result) {
            self.cancel();
        });
    };

    self.cancel = function() {
        self.$router.navigate(['Clients']);
    };
};
