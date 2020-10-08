import React from 'react';
import './App.css';
import BusinessCard from './components/businessCard/BusinessCard.jsx';
import Header from './components/header/Header.jsx';
import {Route, Redirect} from 'react-router-dom';
import Content from './components/content/Content.jsx';
import Experiments from './components/experiments/Experiments.jsx';

function App(props) {
  return (
    <div className="container-wrapper">
    	<BusinessCard />
    	<Header /> 
    	<div className='wrapper-content'>
    		  <Route path='/about' component={Content} />
      		<Route path='/experiments' component={Experiments} />
       		<Redirect from='/' to='/about'/>
    	</div>
    </div>
  )
}

export default App;
