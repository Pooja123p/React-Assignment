import React from 'react';
// import './App.css';
import HelloWorld from './component/HelloWorld'
import Header from './component/Header'
import Footer from './component/Foooter'
import Navigation from './component/Navigation'
import NavigationMennu from  './component/NavigationMenu'

function App() {
  return (
    <div>
        <Header/>
        {/* <HelloWorld name="pooja"/> */}
        
        <Navigation/>
        <NavigationMennu/>
        <Footer/>
    </div>
  );
}

export default App;
