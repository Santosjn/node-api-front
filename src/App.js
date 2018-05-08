import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Weathers from './components/Weathers/Weathers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Weathers/>
        </Layout>
      </div>
    );
  }
}

export default App;
