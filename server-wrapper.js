require('babel-register')({
        // "presets": ["es2015"]
        presets: ['react', 'es2015']

});
require('whatwg-fetch');
require('es6-promise');
require('./src/server.js');
