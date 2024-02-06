"use client";
import { backend } from "@/common";
import { toast } from "react-toastify";
import { PropsWithChildren, createContext, useState } from "react";
type UsersType = {
  name: String;
  email: String;
  password: String;
};

type loginType = {
  email: String;
  password: String;
};

type AuthContextType = {
  isLogged: boolean;
  signup: (type: UsersType) => void;
  login: (type: loginType) => void;
};
export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLogged, setIsLogged] = useState(false);

  const signup = async (type: UsersType) => {
    try {
      const { data } = await backend.post("/signup", type);
      const { token } = data;
      localStorage.setItem("token", token);
    } catch (error) {}
  };
  const login = async (type: loginType) => {
    try {
      const { data } = await backend.post("/login", type);
      console.log(data);
      // open(true)
    } catch (error) {
      toast("e-mail buruu bn", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <AuthContext.Provider value={{ isLogged, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};
