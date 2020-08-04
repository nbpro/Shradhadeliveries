import React from 'react';
import Header from './components/Header/header';
import Home from './screens/home/homePage'

const App = () => {
  return (
    <div className="flex flex-col h-screen"> 
        <Header></Header>
        <Home></Home>
    </div>
  );
};

export default App;
