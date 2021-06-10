import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';


const PageOne=()=>{ return <>page 1</>}
const PageTwo=()=>{ return <>page 2</>}

const App =()=> {
  return (
   <>
   <p>
   <a href="/about">
    about
   </a>
   <a href="/">
    home

   </a>
   </p>

   <BrowserRouter>
   <Route path="/" exact component={PageOne}/>
   <Route path="/about" component={PageTwo}/>
   </BrowserRouter>
   </>
  );
}

export default App;
