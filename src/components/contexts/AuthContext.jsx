import React, { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(true);

  return (
    <LoginContext.Provider value={[login, setLogin]}>
      {children}
    </LoginContext.Provider>
  );
};

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(false);

  return (
    <AdminContext.Provider value={[admin, setAdmin]}>
      {children}
    </AdminContext.Provider>
  );
};

export const RegisteredContext = createContext();

export const RegisteredProvider = ({ children }) => {
  const [registered, setRegistered] = useState(false);

  return (
    <RegisteredContext.Provider value={[registered, setRegistered]}>
      {children}
    </RegisteredContext.Provider>
  );
};
