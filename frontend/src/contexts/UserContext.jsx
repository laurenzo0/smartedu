import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext(null);

// Manually decode the JWT payload (no library needed)
function decodeToken(token) {
  try {
    const base64Payload = token.split(".")[1];
    const decoded = JSON.parse(atob(base64Payload));
    return decoded;
  } catch {
    return null;
  }
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // On first load, restore user from localStorage if token exists and is still valid
  useEffect(() => {
    const token = localStorage.getItem("smartedu_token");
    if (token) {
      const decoded = decodeToken(token);
      if (decoded && decoded.exp * 1000 > Date.now()) {
        setUser(decoded);
      } else {
        localStorage.removeItem("smartedu_token");
      }
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("smartedu_token", token);
    const decoded = decodeToken(token);
    setUser(decoded);
  };

  const logout = () => {
    localStorage.removeItem("smartedu_token");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
