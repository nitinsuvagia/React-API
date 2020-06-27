import React from 'react';
import Sidebar from './component/Sidebar';
import Header from './component/Header';
import Page from './component/Page';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Sidebar></Sidebar>
      <Page></Page>
    </div>
  );
}

export default App;
