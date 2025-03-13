import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <section className="section">
        <div className="container">
          <h1 className="title">Welcome to the Restwise</h1>
          <p className="subtitle">This is a simple example of a home page using
            Bulma.</p>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;