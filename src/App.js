import React from 'react';
import Header from './components/Header/header';
import Home from './screens/home/homePage'
import Features from './screens/features/features';
import Pricing from './pricing/pricing';
import OrderDetails from './screens/order/order';
import ContactUs from './screens/contact/contact';
import Footer from './screens/footer/footer';

const App = () => {
  return (
    <div className="flex flex-col h-screen"> 
        <Header></Header>
        <Home></Home>
        <Features></Features>
        <Pricing></Pricing>
        <OrderDetails></OrderDetails>
        <ContactUs></ContactUs>
        <Footer></Footer>
    </div>
  );
};

export default App;
