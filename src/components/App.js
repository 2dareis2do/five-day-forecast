'use strict';

import React from 'react';
import Layout from './Layout.js'
import Weather from './Weather.js'

export default class App extends React.Component {

    render() {
        return(
		  <Layout>
		  	<Weather weatherURL='http://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&appid=7a9a047cd79788f2b905a34f1645d168'/>
		  </Layout>
        );
    }
}