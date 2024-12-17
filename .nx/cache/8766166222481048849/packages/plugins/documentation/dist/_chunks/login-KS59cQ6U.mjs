const login = `<!DOCTYPE html>
<html>
  <head>
    <title>Login - Documentation</title>
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet" />
    <style>
      html {
        font-size: 62.5%;
        height: 100%;
        margin: 0;
        padding: 0;
      }

      body {
        height: 100%;
        margin: 0;
        background-color: #ffffff;
        font-family: 'Lato';
        font-size: 1.4rem;
        font-weight: 400;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .login {
        height: 100%;
        background-color: #f6f9fc;
      }

      .login .login-form {
        height: calc(100% - 70px);
        padding: 68px 0 0;
        text-align: center;
      }

      .login .login-form form {
        position: relative;
        max-width: 460px;
        padding: 26px 30px;
        margin: 55px auto 0;
        background-color: #ffffff;
        border-radius: 3px;
        box-shadow: 0px 2px 4px rgba(91, 107, 174, 0.15);
        text-align: center;
      }

      .login .login-form form:before {
        position: absolute;
        content: '';
        top: 0px;
        left: 0;
        display: inline-block;
        width: 100%;
        height: 2px;
        background-color: #2b66cc;
      }

      .login .login-form form .error {
        display: block;
        color: #ff4e00;
        padding-bottom: 20px;
      }

      .login .login-form .sub-title {
        margin-top: 35px;
        font-size: 1.6rem;
        font-weight: 400;
      }

      .login .login-form .logo {
        max-height: 40px;
      }

      .login .login-form form label {
        display: block;
        margin-bottom: 18px;
        width: 100%;
        text-align: left;
        font-weight: 600;
      }

      .login .login-form form input {
        outline: none;
        width: calc(100% - 30px);
        height: 36px;
        padding: 0 15px;
        border: 1px solid #ececec;
        border-radius: 2px;
        margin-bottom: 20px;
        line-height: 36px;
        text-align: left;
      }

      .login .login-form form input[type='submit'] {
        cursor: pointer;
        display: inline-block;
        width: auto;
        margin: 12px auto 0;
        padding: 0 75px;
        background: transparent;
        border-radius: 36px;
        border: 1px solid #2b66cc;
        color: #2b66cc;
        text-transform: uppercase;
        font-size: 1.4rem;
        font-weight: 700;
        transition: all 0.2s ease-out;
      }

      .login .login-form form input[type='submit']:hover {
        background: #2b66cc;
        color: #ffffff;
      }
    </style>
  </head>
  <body>
    <div class="login">
      <section class="login-form">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-lg-offset-3 col-md-12">
              <img
                alt="Strapi logo"
                class="logo"
                src="https://strapi.io/assets/images/logo_login.png"
              />
              <h2 class="sub-title">Enter the password to access the documentation.</h2>
              <form method="post" action="<%=actionUrl%>">
                <span class="error">Wrong password...</span>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;"
                />
                <input type="submit" value="Login" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </body>
</html>
`;
export {
  login as default
};
