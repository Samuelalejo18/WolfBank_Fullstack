import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import "../styles/login.css";
function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const showHide = () => {
    setPasswordVisible(!passwordVisible);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, errors: signinErros, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signIn(data);
  });
  useEffect(() => {
    if (isAuthenticated) navigate("/Bank");
  }, [isAuthenticated, navigate]);

  return (
    <body className="grid_container">
      <header className="header">
        <div className="logo"></div>
        <div className="wolf">
          <p id="wolf_banck">Wolf Bank</p>
        </div>
      </header>

      <main className="main">
        <div className="container2">
          <p id="bancavirtual">Enter your virtual banking </p>
          <div className="erros">
            {errors.email && (
              <div className=" error">
                <p>❌ email is required</p>
              </div>
            )}
            {errors.email && (
              <div className=" error">
                <p>❌ password is required</p>
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="container3">
            <div className="inputBox2">
              <div className="username">
                <label htmlFor="username1" />
                <input
                  type="email"
                  id="username1"
                  {...register("email", { required: true })}
                />
                <span>Email</span>
              </div>
            </div>

            <div className="inputBox">
              <label htmlFor="password" />
              <input
                type={passwordVisible ? "text" : "password"}
                required="true"
                id="password"
                {...register("password", { required: true })}
              />
              <span>Password</span>
              <div
                id="toggle"
                className={passwordVisible ? "hide" : ""}
                onClick={showHide}
              ></div>
            </div>

            <div className="remember">
              <label id="Remember">
                <input type="checkbox" />
                <p>Remember password</p>
              </label>
            </div>
            <div className="ingresar">
              <button id="ingresar">
                <p>Login</p>
              </button>
            </div>
          </form>

          <div className="errorZoddiv">
            {signinErros.map((error, i) => (
              <div className="errorZod" key={i}>
                {error}
              </div>
            ))}
          </div>
        </div>
      </main>

      <article className="article">
        <button className="help">
          <a href="password%20olvidada.html">Forgot your password?</a>
        </button>
        <button className="help">
          <a href="registrate%20aqui.html">Sign up here</a>
        </button>
      </article>

      <footer className="footer">
        <div className="reserved">
          <img src="../src/assets/lobo2.png" id="wolf" alt="" />
          <p>Wolf Bank. All rights reserved 2023</p>
        </div>
      </footer>
    </body>
  );
}
export default LoginPage;
