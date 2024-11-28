function LoginForm({ toggleForm }) {
  return (
    <div className="form login">
      <span className="title">تسجيل الدخول</span>
      <form action="#">
        <div className="input-field">
          <input type="text" placeholder="أدخل بريدك الإلكتروني" required />
          <i className="uil uil-envelope icon"></i>
        </div>
        <div className="input-field">
          <input
            type="password"
            className="password"
            placeholder="أدخل كلمة المرور"
            required
          />
          <i className="uil uil-lock icon"></i>
          <i className="uil uil-eye-slash showHidePw"></i>
        </div>
        <div className="checkbox-text">
          <div className="checkbox-content df">
            <input type="checkbox" id="logCheck" />
            <label htmlFor="logCheck" className="text">
              تذكرني
            </label>
          </div>
          <a href="#" className="text">
            نسيت كلمة المرور؟
          </a>
        </div>
        <div className="input-field button">
          <input type="button" value="تسجيل الدخول" />
        </div>
        <button type="button" className="login-with-google-btn mt-8">
          تسجيل الدخول باستخدام جوجل
        </button>
      </form>
      <div className="login-signup">
        <span className="text">
          لست عضواً؟{' '}
          <a href="#" className="text signup-link" onClick={toggleForm}>
            اشترك الآن
          </a>
        </span>
      </div>
    </div>
  );
}

export default LoginForm;
