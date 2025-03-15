import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="has-background-white-ter min-height-screen">
      <Navbar/>

      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">Welcome to Restwise</h1>
            <h2 className="subtitle is-3">Your Personal Sleep Companion</h2>
            <p className="is-size-5 mt-4">
              Track, analyze, and improve your sleep patterns for better health
              and wellbeing.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns is-multiline">

            <div className="column is-12">
              <div className="content">
                <h2 className="title is-2">Take Control of Your Sleep
                  Health</h2>
                <p className="is-size-5">
                  Restwise helps you understand your sleep patterns and make
                  positive changes to improve your rest.
                  Our easy-to-use tracking tools give you insights into your
                  sleep duration, quality, and habits,
                  empowering you to make informed decisions about your health.
                </p>
              </div>
            </div>

            <div className="column is-12 mt-5">
              <h3 className="title is-3">Key Features</h3>
              <div className="columns is-multiline">
                <div className="column is-4">
                  <div
                    className="box has-background-primary-light has-text-centered p-5 height-100">
                    <span className="icon is-large">
                      <i className="fas fa-chart-line fa-2x"></i>
                    </span>
                    <h4 className="title is-4 mt-4">Sleep Tracking</h4>
                    <p>Record your sleep duration and quality with just a few
                      taps.</p>
                  </div>
                </div>
                <div className="column is-4">
                  <div
                    className="box has-background-primary-light has-text-centered p-5 height-100">
                    <span className="icon is-large">
                      <i className="fas fa-lightbulb fa-2x"></i>
                    </span>
                    <h4 className="title is-4 mt-4">Smart Insights</h4>
                    <p>Receive personalized recommendations based on your sleep
                      data.</p>
                  </div>
                </div>
                <div className="column is-4">
                  <div
                    className="box has-background-primary-light has-text-centered p-5 height-100">
                    <span className="icon is-large">
                      <i className="fas fa-bell fa-2x"></i>
                    </span>
                    <h4 className="title is-4 mt-4">Sleep Reminders</h4>
                    <p>Set bedtime reminders to maintain a consistent sleep
                      schedule.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-12 mt-5">
              <h3 className="title is-3">Benefits of Better Sleep</h3>
              <div className="columns">
                <div className="column is-6">
                  <div className="content">
                    <ul className="is-size-5">
                      <li>Improved mental clarity and focus</li>
                      <li>Enhanced mood and emotional regulation</li>
                      <li>Strengthened immune system</li>
                      <li>Better physical performance</li>
                    </ul>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="content">
                    <ul className="is-size-5">
                      <li>Reduced stress and anxiety</li>
                      <li>Decreased risk of chronic health conditions</li>
                      <li>Healthy weight management</li>
                      <li>Improved overall quality of life</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-12 mt-5 has-text-centered">
              <h3 className="title is-3">Ready to Transform Your Sleep?</h3>
              <p className="is-size-5 mb-5">Create your account today and start
                your journey to better rest.</p>
              <a href="/signup">
                <button className="button is-primary is-large">
                  Get Started Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Home;
