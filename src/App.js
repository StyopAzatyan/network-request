  
import React, { Component } from 'react';

import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Posts from './containers/Post/Posts';
import Button from "./components/Button/Button";
import requestData from './api/requestData';


export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Layout>
          
          <Posts />
        </Layout>
      </div>
    )
  }
}

export default App;