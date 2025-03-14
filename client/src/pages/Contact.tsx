import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";

const Contact = () => {
  return (
    <>
      <Navbar/>
      <section className="section">
        <div className="container">
          <h1 className="title">Contact</h1>
          <p className="subtitle">This is a simple example of a contact page
            using
            Bulma.</p>
        </div>
      </section>
      <Footer/>
    </>

  );

};
export default Contact;