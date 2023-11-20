/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useAuth } from '../context/auth.context';
import "../styles/moneyactions.css";
function Logout({ open, onClose }) {
    const {  logout } = useAuth();

    const handleLogout = () => {
        logout();
      };


  if (!open) return null;
  return (
    <>
    <div className="modalContainer">
      <button id="cancelMoney" onClick={onClose}>
        x
      </button>
      <form  className="modalForm">
      <p id="logout">Are you sure about logging out? </p>
      <img src="../src/assets/lobologo3.png" id="lobologout" alt="" />
       </form>
      <div className="btnMoney">
        <button id="ingresar"  onClick={handleLogout}>
          <p>Logout</p>
        </button>
      </div>
    </div>
    </>
  );
}
export default Logout;
