import React from 'react';
import Header from './components/Header/header';
import Home from './screens/home/homePage'
import Features from './screens/features/features';
import Pricing from './pricing/pricing';

const App = () => {
  return (
    <div className="flex flex-col h-screen"> 
        <Header></Header>
        <Home></Home>
        <Features></Features>
        <Pricing></Pricing>
    </div>
  );
};

export default App;
