const Signup = () => (
  <section className="section">
    <div className="container">
      <h1 className="title">Sign up</h1>
      <form>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email"/>
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="password"/>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary">Submit</button>
          </div>
          <div className="control">
            <button className="button is-light">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </section>
);
export default Signup;