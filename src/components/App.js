import React from 'react';
import { BrowserRouter, Route, Link, HashRouter,MemoryRouter } from 'react-router-dom';


const PageOne = () => { return <div>page 1</div> }
const PageTwo = () => { return <div>page 2</div> }

const App = () => {
  return (
    <>


      <BrowserRouter>
        <p>
          <Link to="/about">
            about
        </Link>
          <Link to="/">
            home
   </Link>
        </p>
        <Route path="/" exact component={PageOne} />
        <Route path="/about" component={PageTwo} />
      </BrowserRouter>
    </>
  );
}

export default App;
