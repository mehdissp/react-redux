import React from 'react';
import { BrowserRouter, Route, Link, HashRouter,MemoryRouter } from 'react-router-dom';


const PageOne = () => { return <div>page 1</div> }
const PageTwo = () => { return <div>page 2</div> }

const App = () => {
  return (
    <>


      <MemoryRouter>
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
      </MemoryRouter>
    </>
  );
}

export default App;
