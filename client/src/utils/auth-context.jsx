import React, { createContext } from "react";
import auth from "../utils/auth"; // import the auth instance directly

export const AuthContext = createContext({
  user: null,
  login: (userData) => {},
  logout: () => {},
});

export const AuthProvider = (props) => {
  // Remove the line below as you already have an instance of AuthService
  // const authService = new AuthService();

  const login = (token) => {
    auth.login(token); // Use the auth instance directly
  };

  const logout = () => {
    auth.logout(); // Use the auth instance directly
  };

  return (
    <AuthContext.Provider
      value={{
        user: auth.isAuthenticated() ? auth.getProfile() : null, // Use the auth instance directly
        login,
        logout,
      }}
      {...props}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
