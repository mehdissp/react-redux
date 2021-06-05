import React, { Component } from 'react'
import ReactDom from 'react-dom';
import PostList from './PostList';

const App = () => {

  return (
    <>
      <div className="ui container">
        <PostList/>
    </div>
    </>
  );
}

export default App;