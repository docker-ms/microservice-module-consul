'use strict';

const commonOpts = {
  secure: false,
  promisify: true,
  defaults: {
    consistent: true,
    stale: false
  }
};

if ((process.env.MS_SERVICE_TAG && process.env.MS_SERVICE_TAG.indexOf('localhost') > -1) ||
      (process.env.SERVICE_TAG_SUFFIX && process.env.SERVICE_TAG_SUFFIX.indexOf('localhost') > -1)) {

  module.exports = [
    Object.assign({
      host: '10.0.3.159',
      port: 65499
    }, commonOpts),

    Object.assign({
      host: '10.0.3.160',
      port: 65498
    }, commonOpts),

    Object.assign({
      host: '10.0.3.161',
      port: 65497
    }, commonOpts)
  ];

} else {

  module.exports = [
    Object.assign({
      host: 'consul_agent_client_0',
      port: 65401
    }, commonOpts),

    Object.assign({
      host: 'consul_agent_client_1',
      port: 65401
    }, commonOpts),

    Object.assign({
      host: 'consul_agent_client_2',
      port: 65401
    }, commonOpts)
  ];
  
}


