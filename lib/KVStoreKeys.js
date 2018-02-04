'use strict';

const tlsDomains = [
  'localhost',
  '*.sgdev.vcube.com'
];

const keys = {
  godSaidSo: 'godsaidso',

  jwtGate: 'jwt/gate',

  emailGate: 'email/gate',

  mongodbGate: 'mongodb/gate',

  loggerWinstonGate: 'logger/winston/gate',

  tlsCerts: [],

  rabbitmq: 'rabbitmq'
};

tlsDomains.forEach((domain) => {
  keys.tlsCerts.push({
    domain: domain,
    ca: {
      filename: `tls_${domain}_root_ca.pem`,
      consulKey: `tls/${domain}/root/root_ca.pem`
    },
    cert: {
      filename: `tls_${domain}_server_cert.pem`,
      consulKey: `tls/${domain}/server/server_cert.pem`
    },
    key: {
      filename: `tls_${domain}_server_cert_private_key.pem`,
      consulKey: `tls/${domain}/server/server_cert_private_key.pem`
    }
  });
});

module.exports = keys;


