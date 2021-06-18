import React from 'react';
import { BrowserRouter, Router, Route, Link, HashRouter, MemoryRouter, Switch } from 'react-router-dom';


import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from '../components/Header';
import history from '../history'

/***
 * with react router each component
 * needs to be designed to work in isolation
 */


const App = () => {
  return (
    <div className="ui container">



      <Router history={history}>
        <Header />
        <div>
          <Switch>
            <Route path="/" component={StreamList} exact />
            <Route path="/stream/edit/:id" component={StreamEdit} />
            <Route path="/stream/new" component={StreamCreate} />
            <Route path="/stream/delete/:id" component={StreamDelete} />
            <Route path="/stream/:id" component={StreamShow} />
          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
