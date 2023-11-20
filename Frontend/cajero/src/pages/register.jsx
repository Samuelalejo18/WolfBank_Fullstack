import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import "../styles/register.css";

function RegisterPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [textVisible, setTextVisible] = useState(false);
  const showHide = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [isChecked, setIsChecked] = useState(false);
const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signUp, errors: registerErrors } = useAuth();

  const onSubmit = handleSubmit(async (values) => {
    try {
      await signUp(values);
      setIsRegistrationSuccessful(true);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  });

  return   (
    <body className="grid_container1">
      <header className="header2">
        <div className="logo"></div>
        <div className="wolf">
          <p id="wolf_banck2">Wolf Bank</p>
        </div>
      </header>

      <main className="main2">
      {isRegistrationSuccessful ? (
            <div className="registration-success">
              <p>Registration successful! Thank you for joining Wolf Bank.</p>
              <img src="../src/assets/1.png" id="wolf3" alt="" />
            </div>
         
          ) :(
        <div className="container2">
          <p id="bancavirtual">
            Welcome, Register and fill out your personal information.
          </p>
      
          <form onSubmit={handleSubmit(onSubmit)} className="container4">
            <div className="containerinput">
              <div className="inputBox2">
                <div className="username">
                  <label htmlFor="username1" />
                  <input
                    type={textVisible ? "text" : "Name"}
                    id="username1"
                    required="true"
                    {...register("name", { required: true })}
                  />
                  <span>Name {errors.name && <>is required ❌ </>}</span>
                </div>
              </div>

              <div className="inputBox2">
                <div className="username">
                  <label htmlFor="username1" />
                  <input
                    type={textVisible ? "text" : "LastName"}
                    id="username1"
                    required="true"
                    {...register("lastName", { required: true })}
                  />
                  <span>
                    Last name {errors.lastName && <> is required ❌</>}
                  </span>
                </div>
              </div>
            </div>
            <div className="containerinput">
              <div className="inputBox2">
                <div className="username">
                  <label htmlFor="username1" />
                  <input
                    type={textVisible ? "number" : "identificationCard"}
                    id="username1"
                    required="true"
                    {...register("identificationCard", { required: true })}
                  />
                  <span>
                    Identification card{" "}
                    {errors.identificationCard && <> is required ❌ </>}
                  </span>
                </div>
              </div>

              <div className="inputBox2">
                <div className="username">
                  <label htmlFor="username1" />
                  <input
                    type={textVisible ? "text" : "LastName"}
                    id="username1"
                    required="true"
                    {...register("email", { required: true })}
                  />
                  <span>Email {errors.email && <>is required ❌ </>}</span>
                </div>
              </div>
            </div>
            <div className="containerinput">
              <div className="inputBox2">
                <div className="username">
                  <label htmlFor="username1" />
                  <input
                    type={textVisible ? "text" : "username1"}
                    id="username1"
                    required="true"
                    {...register("userName", { required: true })}
                  />
                  <span>
                    user Name {errors.userName && <>is required ❌</>}
                  </span>
                </div>
              </div>

              <div className="inputBox2">
                <label htmlFor="password" />
                <input
                  type={passwordVisible ? "text" : "password"}
                  required="true"
                  id="password"
                  {...register("password", { required: true })}
                />
                <span>Password {errors.password && <>is required ❌ </>}</span>
                <div
                  id="toggle"
                  className={passwordVisible ? "hide" : ""}
                  onClick={showHide}
                ></div>
              </div>
            </div>
            <label id="Remember">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <p>
                I accept the processing of data and the agreement on signatures
                in accordance with the proposed clauses.
                <span>
                  <a href="https://www.minambiente.gov.co/politica-de-proteccion-de-datos-personales/#:~:text=Ley%20de%20Protecci%C3%B3n%20de%20Datos,de%20naturaleza%20p%C3%BAblica%20o%20privada.">
                    See legal terms
                  </a>
                </span>
              </p>
            </label>
            <div
              className="ingresar"
              disabled={!isChecked}
              onClick={handleSubmit(onSubmit)}
            >
              <button id="ingresar">
                <p>Register</p>
              </button>
            </div>
          </form>
          
          <div className="errorZoddiv">
            {!isChecked && (
              <div className="errorZod">
                Please accept the terms to register ❌
              </div>
            )}
            {registerErrors.map((error, i) => (
              <div className="errorZod" key={i}>
                {error}
              </div>
            ))}
          </div>
        </div>
          )}
      </main>

      <article className="article">
        <button className="help">
          <Link to="/">Sign om here</Link>
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
export default RegisterPage;
