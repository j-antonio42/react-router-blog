import './App.scss';
import React, {useState, useEffect} from "react";
import CoolNav from './components/navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Row } from 'reactstrap'
import PostCatalog from './Pages/Catalog';
import CreatePost from './Pages/CreateProduct';
import PostDetail from './Pages/PostDetail';


function App() {
  
  return (
    <>
     <Router>
       <CoolNav/>
      <Row>
        <Switch>
          <Route path="/Home">
             <PostCatalog/>
          </Route>
          <Route path="/CreatePost">
             <CreatePost/>
          </Route>
          <Route path="/detail/:id">
             <PostDetail/>
          </Route>
        </Switch>
      </Row>
    </Router>
    </>
  )
}


export default App;
