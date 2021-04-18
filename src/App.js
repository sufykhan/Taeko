import React from "react";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Screens/Home";
import HomeScreen from "./Screens/HomeScreen";


const App = () => {
  return (
    <>
       <Header/>
      <main className="py-3">
  
          <Route path="/" exact>
          <HomeScreen/>
          
          </Route>

          <Route path="/123" exact>
          <Home/>
          </Route>
         
          </main>

    </>
  );
};

export default App;
