import "../styles/bank.css";
function Bank() {
 
  return (
    <>
    {/*
    <body className="grid_container" id="grid_container">
    <header className="header">
      <img src="../src/assets/logo%20wolf.png" id="wolf_logo" alt="" />
      <p id="wolf_banck">Wolf Bank</p>
    </header>
    <nav className="navbar">
      <p style={{ color: "white" }}>Date of admission:</p>
      <p id=" admission" style={{ color: "white" }} />
      <button className="btn">
        <img src="../src/assets/usuario.png" id="" alt="" />
        <span id="user" style={{ color: "white" }}>
          {" "}
          Samuel{" "}
        </span>{" "}
      </button>
    </nav>
    <header2 className="header2">
      <h1 style={{ color: "white" }}>
        {" "}
        Hi, <span>Samuel</span>
      </h1>
    </header2>
    <nav2 className="navbar2">
      <div className="button">
        <div className="column">
          {" "}
          <button className="btn" id="Pay">
            <img src="../src/assets/Pay.png" id="pay1" alt="" />{" "}
            <p style={{ color: "white" }}>Pay</p>
          </button>
        </div>
        <div className="column">
          {" "}
          <button className="btn" id="retiro1">
            <img src="../src/assets/retiro-de-efectivo.png" id="retiro" alt="" />{" "}
            <p style={{ color: "white" }}>Withdraw</p>{" "}
          </button>
        </div>
        <div className="column">
          {" "}
          <button className="btn" id="Trans">
            <img src="../src/assets/Tranferir.png" id="trans1" alt="" />{" "}
            <p style={{ color: "white" }}>Transfer</p>{" "}
          </button>
        </div>
        <div className="column">
          {" "}
          <button className="btn" id="ingresar1">
            <img src=" ../src/assets/ingresar.png" id="ingresar" alt="" />{" "}
            <p style={{ color: "white" }}>Deposit </p>
          </button>
        </div>
        <div className="column">
          {" "}
          <button className="btn" id="salir1">
            {" "}
            <img src="../src/assets/salir.png" id="salir" alt="" />{" "}
            <p style={{ color: "white" }}>Go out</p>
          </button>
        </div>
      </div>
    </nav2>
    <aside className="sidebar">
      <div>
        <button id="moneyProductos">
          {" "}
          <img src="../src/assets/money.png" className="imageMoney" alt="" />{" "}
          <p>
            {" "}
            <strong>Request your products</strong> without leaving home and learn
            more benefits
          </p>
          <img src="../src/assets/flecha-correcta.png" className="imageMoney" alt="flecha" />
        </button>{" "}
      </div>
      <div className="button-with-tail">
        <button id="help">Help</button>
      </div>
    </aside>
    <main className="main">
      <div className="productos">
        <p className="savingsAccounts">Savings accounts</p>
        <div className="form">
          <div id="numberAcount">
            <img src="../src/assets/pig.png" id="pig" alt="" />
            <div id="Cta">
              <p> Svgs accnt Nomina</p>
              <img src="../src/assets/show.png" id="show1" alt="" />
            </div>
            <button id="btnpoints">
              {" "}
              <img src="../src/assets/Points.png" id="points" alt="" />
            </button>
          </div>
          <div id="availableBalance">
            <p id="Balance">$200000</p>
            <p id="Available">Available balance</p>
          </div>
          <div className="Seedetails">
            <button className="details">See details</button>
          </div>
        </div>
      </div>
      <div className="productos">
        <p className="savingsAccounts">Investments</p>
        <div className="form">
          <img src="../src/assets/inversion.png" id="Investments" alt="inversion" />
          <div className="Textinversion">
            <p>Investments</p>
            <p>Wolf bank Securities</p>
          </div>
          <div className="Seeinvestments">
            <button className="investmentslook">See investments</button>
          </div>
        </div>
      </div>
      <div className="productos2">
        <div className=" border1">
          <div id="cdttoday">
            {" "}
            <p>Open your CDT today!</p>
          </div>
          <div className="TextCDT">
            <p>
              {" "}
              <strong> Invest your money</strong>
            </p>
            <p> Without fees and without going to the bank!</p>
          </div>
          <div className="OpenCDT">
            <button className="cdt">
              <strong>Open CDT </strong>
            </button>
          </div>
        </div>
      </div>
      <div className="productos2">
        <p className="savingsAccounts">Insurance and assistance</p>
        <div className="border1">
          <div id="cdttoday">
            {" "}
            <p>Insurance</p>
          </div>
          <div className="TextCDT">
            <p>
              {" "}
              <strong> Get insured today!</strong>
            </p>
            <p> Prepare for the future by purchasing insurance</p>
          </div>
          <div className="OpenCDT">
            <button className="cdt">
              <strong>Purchase insurance </strong>
            </button>
          </div>
        </div>
      </div>
    </main>
    <div className="modal_container" id="mondal_container">
      <div className="modal" id="modal2">
        <h1 id="Sure"> Are you sure you want to log out?</h1>
        <div className="buttonSingOff">
          <button id="Signoff">
            <a href="login1.html">
              <p style={{ color: "white" }}>Sign off</p>
            </a>
          </button>
          <button className="Cancel" id="Cancel">
            <p style={{ color: "white" }}>Cancel</p>
          </button>
        </div>
      </div>
      <div className="modal" id="modal3">
        <h1> Enter money</h1>
        <div className="inputBox2">
          <div className="username">
            <label htmlFor="username1" />
            <input type="number" id="username1" />
            <span className="span" style={{ color: "white" }}>
              $
            </span>
          </div>
        </div>
        <div className="inputBox2">
          <div className="username">
            <label htmlFor="username2" />
            <input type="password" required="" id="username2" />
            <span className="span2 " style={{ color: "white" }}>
              Password
            </span>
            <div id="toggle" onClick="showHide();" />
          </div>
        </div>
        <div className="buttonSingOff">
          <button className="Cancel" id="transaction">
            <p style={{ color: "white" }}>Make transaction</p>
          </button>
          <button className="Cancel" id="cancel2">
            <p style={{ color: "white" }}>Cancel</p>
          </button>
        </div>
      </div>
      <div className="modal" id="modal3_1">
        <div id="Logo">
          <img src="../src/assets/logo%20wolf.png" id="wolflogo" alt="" />
          <h1 id="wolfTarget" style={{ color: "white" }}>
            Wolf Bank
          </h1>
        </div>
        <p id="Succesful" style={{ color: "white" }}>
          Succesful transaction!!
        </p>
        <div id="tipoTransaccion">
          <p style={{ color: "white" }}>
            <strong> Transaction Type</strong>
          </p>
          <p style={{ color: "white" }}>Money income</p>
        </div>
        <hr />
        <div id="fecha_hora">
          <p style={{ color: "white" }}>
            <strong> Date and Time</strong>
          </p>
          <p id="Date" />
        </div>
        <hr />
        <div id="valor">
          <p>
            <strong> Value </strong>
          </p>
          <p id="Value"> </p>
        </div>
      </div>
      <div className="modal" id="modal4">
        <h1> withdraw cashy</h1>
        <div className="inputBox2">
          <div className="username">
            <label htmlFor="username3" />
            <input type="number" id="username3" />
            <span className="span" style={{ color: "white" }}>
              $
            </span>
          </div>
        </div>
        <div className="inputBox2">
          <div className="username">
            <label htmlFor="username4" />
            <input type="password" required="" id="username4" />
            <span className="span2" id="span4" style={{ color: "white" }}>
              Password
            </span>
            <div id="toggle" />
          </div>
        </div>
        <div className="buttonSingOff">
          <button className="Cancel" id="transaction2">
            <p style={{ color: "white" }}>Make transaction</p>
          </button>
          <button className="Cancel" id="cancel3">
            <p style={{ color: "white" }}>Cancel</p>
          </button>
        </div>
      </div>
    </div>
    <article id="article">
      <div className="taxcertificate">
        <p id="new"> New</p>
        <p>
          <b>Tax certificates</b>, download them in two steps
        </p>
        <button id="download"> Download</button>
      </div>
    </article>
    <article id="article2">
      <div id="article2_1">
        <div className="taxcertificate2">
          <img src="../src/assets/localizacion.png" className="travel" alt="localizacion" />
          <div id="textTravel">
            <p className="discover">
              <b>Discover new destinations !</b>
            </p>
            <p className="travelcredit">Travel with Wolf bank credit card</p>
          </div>
        </div>
        <div className="taxcertificate2">
          <img src="../src/assets/carro.png" alt="" className="travel" />
          <div id="textTravel">
            <p className="discover">
              <b>Buy what you like</b>
            </p>
            <p className="travelcredit">Enjoy special benefits</p>
          </div>
        </div>
      </div>
    </article>
    <footer className="footer">
      <img src="../src/assets/lobo.png" id="wolf" alt="" />
      <p>Wolf Bank. All rights reserved 2023</p>
    </footer>
    </body>
  */}
  </>
  
  );
}
export default Bank;
