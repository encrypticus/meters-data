import React from 'react';
import Header from '$c/header';
import DataTableContainer from '$containers/data-table-container';

const App = () => {
  return (
    <main role="main" className="container">
      <Header/>
      <DataTableContainer/>
    </main>
  );
};

export default App;
