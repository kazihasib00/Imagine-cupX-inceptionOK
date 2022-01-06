import React from 'react'
import './Signup.css'
function Signup() {
  return (
  <section className="login">
  <div className="container">
    <h3 className="title">Sign up</h3>
    <div className="social-login">
      <button><i className="fab fa-facebook-f" /> Facebook </button>
      <button><i className="fab fa-google" /> Google </button>
    </div>
    <p className="separator"><span>&nbsp;</span>Or<span>&nbsp;</span></p>
    <form>
      <div className="form-group">
        <label htmlFor="fullname" />
        <input type="text" id="fullname" placeholder="Full Name" />
      </div>
      <div className="form-group">
        <label htmlFor="username" />
        <input type="text" id="username" placeholder="User Name" />
      </div>
      <div className="form-group">
        <label htmlFor="login as" />
        <input type="text" id="Login as" placeholder="Login as" />
      </div>
      <div className="form-group">
        <label htmlFor="age" />
        <input type="number" id="Age" placeholder="Age" />
      </div>
      <div className="form-group">
        <label htmlFor="Email" />
        <input type="Email" id="Email" placeholder="Email Address" />
      </div>
      <div className="form-group">
        <label htmlFor="password" />
        <input type="password" id="password" placeholder="Password" />
      </div>
      <div className="form-group">
        <label htmlFor="password" />
        <input type="password" id="Conform Password" placeholder="Confirm Password" />
      </div>
      <button type="submit">Sign up</button>
    </form>
    <p className="additional-act">Already have an account? <span> Sign in </span></p>
  </div>
</section>

  )
}

export default Signup
