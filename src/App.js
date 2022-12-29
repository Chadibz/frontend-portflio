import React from "react";
import { Abouts, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <Abouts />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
