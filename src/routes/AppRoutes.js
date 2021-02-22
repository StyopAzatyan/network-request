import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
import Posts from '../containers/Posts/Posts';
import Todos from '../containers/Todos/Todos';
import HomePage from '../containers/HomePage/HomePage';
import PostDetails from '../containers/PostDetails/PostDetails';

const AppRoutes = () => {

    return (
        <BrowserRouter>
          <Header />
          <Layout>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/posts/:postId" component={PostDetails} />
            <Route exact path="/todos" component={Todos} />
          </Layout>
        </BrowserRouter>
    )
}

export default AppRoutes;