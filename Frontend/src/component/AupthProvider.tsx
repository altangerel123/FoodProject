"use client";
import { backend } from "@/common";
import { PropsWithChildren, createContext, useState } from "react";

type UsersType = {
  name: String;
  email: String;
  password: String;
};

type AuthContextType = {
  isLogged: boolean;
  signup: (type: UsersType) => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLogged, setIsLogged] = useState(false);

  const signup = async (type: UsersType) => {
    try {
      const { data } = await backend.post("/signup", type);

      console.log(data);
    } catch (error) {}
  };
  return (
    <AuthContext.Provider value={{ isLogged, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
