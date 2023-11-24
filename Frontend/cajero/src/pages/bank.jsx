import { useEffect, useState } from 'react';
import Deposit from '../components/deposit';
import Logout from '../components/logout';
import Transfer from '../components/transfer';
import Withdraw from "../components/withdraw";
import { useAuth } from '../context/auth.context';
import "../styles/bank.css";
function Bank() {
  const {  user } = useAuth();
const [openModalDeposit,setOpenModalDeposit]=useState(false);
const [openModalTransfer,setOpenModalTransfer]=useState(false);
const [openModalWithdraw,setOpenModalTWithdraw]=useState(false);
const [openModalLogout,setOpenModalLogout]=useState(false);
const [admissionDateTime, setAdmissionDateTime] = useState("");

  useEffect(() => {
    // Función para obtener la fecha y hora actual en el formato deseado
    const getCurrentDateTime = () => {
      const today = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
      return today.toLocaleDateString('en-US', options);
    };

    // Establecer la fecha y hora actual cuando el componente se monta
    setAdmissionDateTime(getCurrentDateTime());

    // Actualizar la hora cada segundo
    const intervalId = setInterval(() => {
      setAdmissionDateTime(getCurrentDateTime());
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
    
    <body className="grid_container4" id="grid_container4">
    <Deposit open={openModalDeposit} onClose={()=>setOpenModalDeposit(false)} />
    <Transfer open={openModalTransfer} onClose={()=>setOpenModalTransfer(false)} />
    < Withdraw open={openModalWithdraw} onClose={()=>setOpenModalTWithdraw(false)} />
    < Logout open={openModalLogout} onClose={()=>setOpenModalLogout(false)} />
    <header className="header3">
      <img src="../src/assets/logo%20wolf.png" id="wolf_logo4" alt="" />
      <p id="wolf_banck4">Wolf Bank</p>
    </header>
    <nav className="navbar">
      <p style={{ color: "white" }}>Date of admission:</p>
      <p id=" admission" style={{ color: "white" }} > {admissionDateTime} </p>


      <button className="btn">
        <img src="../src/assets/usuario.png" id="" alt="" />
        <span id="user" style={{ color: "white" }}>
        {user.name}  {user.lastName} 
        </span>
      </button>
    </nav>
    <section className="section">
      <h1 style={{ color: "white" }}>
        {" "}
        Hi, <span>   {user.name}</span>
      </h1>
    </section>
    <aside className="aside">
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
            <img src="../src/assets/retiro-de-efectivo.png" id="retiro" alt=""onClick={()=>setOpenModalTWithdraw(true)} />{" "}
            <p style={{ color: "white" }}>Withdraw</p>{" "}
          </button>
        </div>
        <div className="column">
          {" "}
          <button className="btn" id="Trans" onClick={()=>setOpenModalTransfer(true)}>
            <img src="../src/assets/Tranferir.png" id="trans1" alt="" />{" "}
            <p style={{ color: "white" }}>Transfer</p>{" "}
          </button>
        </div>
        <div className="column">
          {" "}
          <button className="btn" id="ingresar1" onClick={()=>setOpenModalDeposit(true)}>
            <img src=" ../src/assets/ingresar.png" id="ingresar2" alt="" />{" "}
            <p style={{ color: "white" }}>Deposit </p>
            
          </button>
        </div>
       
        <div className="column">
          {" "}
          <button className="btn" id="salir1">
            {" "}
            <img src="../src/assets/salir.png" id="salir" alt="" onClick={()=>setOpenModalLogout(true)} />{" "}
            <p style={{ color: "white" }}>Go out</p>
          </button>
        </div>
      </div>
    </aside>
    <aside className="sidebar">
      <div>
        <button id="moneyProductos">
          {" "}
          <img src="../src/assets/money.png" className="imageMoney" alt="" />{" "}
          <p   style={{ color: "black" }}>
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
    <main className="main4">
      <div className="productos">
        <p  style={{ color: "black" }} className="savingsAccounts">Savings accounts</p>
        <div className="form">
          <div id="numberAcount">
            <img src="../src/assets/pig.png" id="pig" alt="" />
            <div id="Cta">
              <p   style={{ color: "black" }}> Svgs accnt Nomina</p>
              <img src="../src/assets/show.png" id="show1" alt="" />
            </div>
            <button id="btnpoints">
              {" "}
              <img src="../src/assets/Points.png" id="points" alt="" />
            </button>
          </div>
          <div id="availableBalance">
            <p id="Balance">  ${user.balance}</p>
            <p style={{ color: "black" }} id="Available">Available balance</p>
          </div>
          <div className="Seedetails">
            <button className="details">See details</button>
          </div>
        </div>
      </div>
      <div className="productos">
        <p  style={{ color: "black" }} className="savingsAccounts">Investments</p>
        <div className="form">
          <img src="../src/assets/inversion.png" id="Investments" alt="inversion" />
          <div className="Textinversion">
            <p   style={{ color: "black" }}>Investments</p>
            <p   style={{ color: "black" }}>Wolf bank Securities</p>
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
            <p   style={{ color: "black" }}>Open your CDT today!</p>
          </div>
          <div className="TextCDT">
            <p   style={{ color: "black" }}>
              {" "}
              <strong> Invest your money</strong>
            </p>
            <p   style={{ color: "black" }}> Without fees and without going to the bank!</p>
          </div>
          <div className="OpenCDT">
            <button className="cdt">
              <strong>Open CDT </strong>
            </button>
          </div>
        </div>
      </div>
      <div className="productos2">
        <p  style={{ color: "black" }} className="savingsAccounts">Insurance and assistance</p>
        <div className="border1">
          <div id="cdttoday">
            {" "}
            <p   style={{ color: "black" }}>Insurance</p>
          </div>
          <div className="TextCDT">
            <p   style={{ color: "black" }}>
              {" "}
              <strong> Get insured today!</strong>
            </p>
            <p   style={{ color: "black" }}> Prepare for the future by purchasing insurance</p>
          </div>
          <div className="OpenCDT">
            <button className="cdt">
              <strong>Purchase insurance </strong>
            </button>
          </div>
        </div>
      </div>
    </main>
    
    <article className="article4">
      <div className="taxcertificate">
        <p id="new"> New</p>
        <p   style={{ color: "black" }}>
          <b>Tax certificates</b>, download them in two steps
        </p>
        <button id="download"> Download</button>
      </div>
    </article>
    <article className="article5">
      <div id="article2_1">
        <div className="taxcertificate2">
          <img src="../src/assets/localizacion.png" className="travel" alt="localizacion" />
          <div id="textTravel">
            <p  style={{ color: "black" }} className="discover">
              <b>Discover new destinations !</b>
            </p>
            <p  style={{ color: "black" }} className="travelcredit">Travel with Wolf bank credit card</p>
          </div>
        </div>
        <div className="taxcertificate2">
          <img src="../src/assets/carro.png" alt="" className="travel" />
          <div id="textTravel">
            <p  style={{ color: "black" }} className="discover">
              <b>Buy what you like</b>
            </p>
            <p style={{ color: "black" }} className="travelcredit">Enjoy special benefits</p>
          </div>
        </div>
      </div>
    </article>
    <footer className="footer4">
      <img src="../src/assets/lobo.png" id="wolf" alt="" />
      <p   style={{ color: "black" }}>Wolf Bank. All rights reserved 2023</p>
    </footer>
    </body>
  
  </>
  
  );
}

export default Bank;
