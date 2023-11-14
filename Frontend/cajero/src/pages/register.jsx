import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import "../styles/register.css";
function RegisterPage() {
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
    <body className="grid_container1">
      <header className="header2">
        <div className="logo"></div>
        <div className="wolf">
          <p id="wolf_banck2">Wolf Bank</p>
          
        </div>
      </header>

      <main className="main2">
        <div className="container2">
          <p id="bancavirtual">Welcome, Register and fill out your personal information.</p>
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
          <form onSubmit={handleSubmit(onSubmit)} className="container4">
            <div className="inputBox2">
              <div className="username">
                <label htmlFor="username1" />
                <input
                  type="text"
                  id="username1"
                 
                />
                <span>Name</span>
              </div>
            </div>
            <div className="inputBox2">
              <div className="username">
                <label htmlFor="username1" />
                <input
                  type="text"
                  id="username1"
                 
                />
                <span>Last name</span>
              </div>
            </div>
            <div className="inputBox2">
              <div className="username">
                <label htmlFor="username1" />
                <input
                  type="number"
                  id="username1"
                
                />
                <span>Identification card</span>
              </div>
            </div>
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
            <div className="inputBox2">
              <div className="username">
                <label htmlFor="username1" />
                <input
                  type="number"
                  id="username1"
                
                />
                <span>Balance</span>
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

            <label id="Remember">
              <input type="checkbox" />
              <p>
                I accept the processing of data and the agreement on signatures in
                accordance with the proposed clauses.
                <span>
                  <a href="https://www.minambiente.gov.co/politica-de-proteccion-de-datos-personales/#:~:text=Ley%20de%20Protecci%C3%B3n%20de%20Datos,de%20naturaleza%20p%C3%BAblica%20o%20privada.">
                    See legal terms
                  </a>
                </span>
              </p>
            </label>

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
        <div className="button">
          <button id="Cancel">
            <a href="login1.html">
              <p>cancel</p>
            </a>
          </button>
          <button id="Next">
            <p>Next</p>
          </button>
        </div>

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
export default RegisterPage;
