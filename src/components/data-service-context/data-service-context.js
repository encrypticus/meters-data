import React from 'react';

const {
  Provider: DataServiceProvider,
  Consumer: DataServiceConsumer,
} = React.createContext();

export {
  DataServiceConsumer,
  DataServiceProvider,
};
