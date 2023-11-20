/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import { depositRequest, loginRequest, registerRequest, transferRequest, verifyTokenRequest, withdrawRequest } from "../api/auth";

export const AuthContext = createContext();
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("UseAuth must be used within an AuthProvider");
  }
  return context;
};

// eslint-disable-next-line react/function-component-definition
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const signUp = async (user) => {
    try {
      user.identificationCard = Number(user.identificationCard);
     
      const res = await registerRequest(user);

      setUser(res.data);
      // setIsAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const deposit = async (user) => {
    try {
      user.identificationCard = Number(user.identificationCard);
      user.balance= Number(user.balance);
      const res = await depositRequest(user);
      setUser(res.data);
  
      setIsAuthenticated(true);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors(error.response.data.message);
    }
  };
  const withdraw = async (user) => {
    try {
      user.identificationCard = Number(user.identificationCard);
      user.balance= Number(user.balance);
      const res = await withdrawRequest(user);
      setUser(res.data);
  
      setIsAuthenticated(true);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors(error.response.data.message);
    }
  };
  
  



const transfer = async (user) => {
  try {
    user.identificationCard = Number(user.authenticatedUser);
    user.identificationCard = Number(user.recipientUser);
    user.balance= Number(user.balance);
    const res = await transferRequest(user);
    setUser(res.data);

    setIsAuthenticated(true);
  } catch (error) {
    if (Array.isArray(error.response.data)) {
      return setErrors(error.response.data);
    }
    setErrors(error.response.data.message);
  }
};

  const signIn = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);

      setIsAuthenticated(true);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors(error.response.data.message);
    }
  };

  // Elimar los mensajes pasado un tiempo
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const res = await verifyTokenRequest(cookies.token);

        if (!res.data) return setIsAuthenticated(false);
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
      }
    };
    checkLogin();
  }, []);
  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);
  };
  return (
    <AuthContext.Provider
      value={{
        signUp,
        user,
        isAuthenticated,
        errors,
        signIn,
        loading,
        logout,
        deposit,
        transfer,
        withdraw
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
