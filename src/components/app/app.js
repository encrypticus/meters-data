import React from 'react';
import Header from '$c/header';
import DataTable from '$containers/data-table';

const App = () => {
  return (
    <main role="main" className="container">
      <Header/>
      <DataTable/>
    </main>
  );
};

export default App;
