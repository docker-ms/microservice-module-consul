'use strict';

const consul = require('consul');

const initialConsulClusterSetup = require('./conf/InitialConsulClusterSetup');

if (!initialConsulClusterSetup || !Array.isArray(initialConsulClusterSetup) || initialConsulClusterSetup.length < 3) {
  throw new Error('Invalid initial consul cluster setup');
}

const agents = initialConsulClusterSetup.reduce((acc, curr) => {
  acc.push(consul(curr));
  return acc;
}, []);

module.exports = agents;


