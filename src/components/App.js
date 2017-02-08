'use strict';

import React from 'react';
import Layout from './Layout.js'
import Weather from './Weather.js'

export default class App extends React.Component {

    render() {
        return(
		  <Layout>
		  	<Weather />
		  </Layout>
        );
    }
}