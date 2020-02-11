import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';

import App from '$c/app';
import ErrorBoundry from '$c/error-boundry';
import DataService from './services/dataService';
import {DataServiceProvider} from '$c/data-service-context';


import 'bootstrap/scss/bootstrap.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

const dataService = new DataService();

ReactDom.render(
    <ErrorBoundry>
      <DataServiceProvider value={dataService} >
        <App/>
      </DataServiceProvider>
    </ErrorBoundry>,
  document.querySelector('.root')
);
