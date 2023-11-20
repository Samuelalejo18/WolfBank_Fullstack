/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";


import { useForm } from 'react-hook-form';
import { useAuth } from '../context/auth.context';

import "../styles/moneyactions.css";
function Transfer({ open, onClose }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [textVisible, setTextVisible] = useState(false);
  const showHide = () => {
    setPasswordVisible(!passwordVisible);
  };
  
const { register, handleSubmit, formState: { errors } } = useForm();
const {  transfer, errors:  transferErros,  } = useAuth();


const onSubmit = handleSubmit((data) => {
  transfer(data);
});

  if (!open) return null;
  return (
    <div className="modalContainer">
      <button id="cancelMoney" onClick={onClose}>
        x
      </button>
      <form onSubmit={handleSubmit(onSubmit)} className="modalForm">
      <p id="bancavirtual">Transfer your money </p>
        <div className="inputBox">
          <div className="username">
            <label htmlFor="username1" />
            <input
              type={textVisible ? "number" : "identificationCard"}
              id="username1"
               required="true"
                {...register("authenticatedUser", { required: true })}
            />
            <span>
             Your Identification 
              {errors.authenticatedUser && <> is required ❌ </>}
            </span>
          </div>
        </div>
        <div className="inputBox">
          <div className="username">
            <label htmlFor="username1" />
            <input
              type={textVisible ? "number" : "recipientUser"}
              id="username1"
              required="true"
                {...register("recipientUser", { required: true })}
            />
            <span>
            Recipient identification
              {errors.recipientUser && <> is required ❌ </>}
            </span>
          </div>
        </div>
        <div className="inputBox">
          <div className="username">
            <label htmlFor="username1" />
            <input
              type={textVisible ? "number" : "balance"}
              id="username1"
              required="true"
                {...register("balance", { required: true })}
            />
            <span>Balance {errors.Balance && <> is required ❌ </>}</span>
          </div>
        </div>

        <div className="inputBox">
          <label htmlFor="password" />
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            required="true"
             {...register("password", { required: true })}
          />
          <span>
            Password{" "}
            {errors.password && (
              
                <>is required ❌</>
           
              )}
          </span>
          <div
            id="toggle"
            className={passwordVisible ? "hide" : ""}
            onClick={showHide}
          ></div>
        </div>
        <div className="btnMoney">
        <button id="ingresar">
          <p>Transfer</p>
        </button>
      </div>
       
      </form>
      <div className="errorZoddiv">
          {transferErros.map((error, i) => (
            <div className="errorZod" key={i}>
              {error}
            </div>
          ))
          }
        </div>
    </div>
  );
}
export default Transfer;
