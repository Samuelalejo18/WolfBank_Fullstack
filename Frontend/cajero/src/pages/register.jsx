
import "../styles/login.css";
function RegisterPage() {
 

  return (
    <>
  <header className="header">
    <img src="1.png" id="wolf_logo" alt="" />
    <p id="wolf_banck">Wolf Bank</p>
  </header>
  <main className="main">
    <div className="container2">
      <p id="Recover">
        Welcome, Register and fill out your personal information.
      </p>
      <div className="container3" id="container3.1">
        <div className="inputBox2">
          <div className="username">
            <label htmlFor="username1" />
            <input type="text" id="username1" />
            <span>Name</span>
          </div>
        </div>
        <div className="inputBox2">
          <div className="username">
            <label htmlFor="username1" />
            <input type="text" id="username1" />
            <span>Last Name</span>
          </div>
        </div>
        <div className="inputBox2">
          <div className="username">
            <label htmlFor="username1" />
            <input type="number" id="username1" />
            <span>identification card</span>
          </div>
        </div>
        <div className="inputBox2">
          <div className="username">
            <label htmlFor="username1" />
            <input type="text" id="username1" />
            <span>User</span>
          </div>
        </div>
        <div className="inputBox2">
          <div className="username">
            <label htmlFor="username1" />
            <input type="password" id="username1" />
            <span>Password</span>
          </div>
        </div>
        <div className="inputBox2">
          <div className="username">
            <label htmlFor="username1" />
            <input type="password" id="username1" />
            <span>Password Again</span>
          </div>
        </div>
        <div className="inputBox2">
          <div className="username">
            <label htmlFor="username1" />
            <input type="email" id="username1" />
            <span>Email</span>
          </div>
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
      </div>
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
    </div>
    <div id="Register2">
      <div id="Register">
        <p>
          Thank you for registering. In a maximum of 3 business days, we will
          contact you to complete your registration. Welcome to Wolf Bank!!
        </p>
        <img src="lobologo3.png" id="wolf1" alt="" />
      </div>
      <div id="Home1">
        &lt;
        <button id="Home">
          <a href="login1.html">
            <p>Home</p>
          </a>
        </button>
      </div>
    </div>
  </main>
  <footer2 className="final">
    <img src="lobo2.png" id="wolf" alt="" />
    <p>Wolf Bank. All rights reserved 2023</p>
  </footer2>
</>

  );
}
export default RegisterPage;
