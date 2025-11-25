// src/context/AdminContext.jsx
import { createContext, useState, useEffect } from "react";

export const AdminContext = createContext(false);

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const password = urlParams.get("adminPass") || "";
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      // Remove password from URL
      const newUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
    }
  }, []);

  return (
    <AdminContext.Provider value={isAdmin}>
      {children}
    </AdminContext.Provider>
  );
};
