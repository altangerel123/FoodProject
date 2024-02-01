"use client";
import { PropsWithChildren, createContext, useState } from "react";

type User = {
  email: String;
  password: String;
  _id: String;
};

type AuthContextType = {
  isLogged: boolean;
  signup: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <AuthContext.Provider value={{ isLogged, signup: () => {} }}>
      {children}
    </AuthContext.Provider>
  );
};
