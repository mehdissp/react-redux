import React from 'react';
import { BrowserRouter, Route, Link, HashRouter,MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';



const App = () => {
  return (
    <div className="ui container">


      
      <BrowserRouter>
      <Header/>
      <div>

      
      <Route path ="/" component={StreamList} exact/>
      <Route path ="/stream/edit" component={StreamEdit}/>
      <Route path ="/stream/create" component={StreamCreate}/>
      <Route path ="/stream/delete" component={StreamDelete}/>
      <Route path ="/stream/show" component={StreamShow}/>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
