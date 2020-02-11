import React from 'react';
import Header from '$c/header';

const App = () => {
  return (
    <main role="main" className="container">
      <Header numItems={5} total={210}/>
    </main>
  );
};

export default App;
