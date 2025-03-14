import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

const About: React.FC = () => {
  return (
    <>
      <Navbar/>
      <section className="section">
        <div className="container">
          <h1 className="title">About</h1>
          <p className="subtitle">
            This is a simple example of a about page using
            <a href="https://bulma.io"> Bulma</a>.
          </p>
        </div>
      </section>
      <Footer/>
    </>
  );

};

export default About;