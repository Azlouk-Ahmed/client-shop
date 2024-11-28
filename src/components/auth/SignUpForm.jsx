function SignUpForm({ toggleForm }) {
    return (
      <div className="form signup">
        <span className="title">Registration</span>
        <form action="#">
            <div class="input-field">
              <input type="text" placeholder="Enter your name" required />
              <i class="uil uil-user"></i>
            </div>
            <div class="input-field">
              <input type="text" placeholder="Enter your email" required />
              <i class="uil uil-envelope icon"></i>
            </div>
            <div class="input-field">
              <input type="password" class="password" placeholder="Create a password" required />
              <i class="uil uil-lock icon"></i>
            </div>
            <div class="input-field">
              <input type="password" class="password" placeholder="Confirm a password" required />
              <i class="uil uil-lock icon"></i>
              <i class="uil uil-eye-slash showHidePw"></i>
            </div>
            <div class="checkbox-text">
              <div class="checkbox-content">
                <input type="checkbox" id="termCon" />
                <label for="termCon" class="text">I accepted all terms and conditions</label>
              </div>
            </div>
            <div class="input-field button">
              <input type="button" value="Signup" />
            </div>
          </form>
        <div className="login-signup">
          <span className="text">
            Already a member?
            <a href="#" className="text login-link" onClick={toggleForm}>
              Login Now
            </a>
          </span>
        </div>
      </div>
    );
  }
  
  export default SignUpForm;
  