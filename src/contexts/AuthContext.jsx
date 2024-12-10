import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [stateUser, setStateUser] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(data);
  }, [stateUser]);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    setStateUser(!stateUser);
  };
  return (
    <AuthContext.Provider value={{ user, logout, setStateUser, stateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
