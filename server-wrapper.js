require('babel-register')({
        presets: ['react', 'es2015']
});
require('whatwg-fetch');
require('es6-promise');
require('./src/server.js');
