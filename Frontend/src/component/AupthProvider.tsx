"use client";
import { backend } from "@/common";
import { toast } from "react-toastify";
import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
  isUser: boolean;
  signup: (type: UsersType) => void;
  login: (type: loginType) => void;
};
export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const router = useRouter();

  const signup = async (type: UsersType) => {
    try {
      const { data } = await backend.post("/signup", type);
      const { token } = data;
      localStorage.setItem("token", token);
      setIsUser(true);
      router.push("/Home");
    } catch (error) {
      toast("Aldaa garlaa", {
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
  const login = async (type: loginType) => {
    try {
      const { data } = await backend.post("/login", type);
      console.log(data);
      const { token } = data;
      localStorage.setItem("token", token);
      setIsUser(true);
      router.push("/Home");
    } catch (error) {
      toast("Aldaa garlaa", {
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

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     isUser;
  //   }
  // });
  return (
    <AuthContext.Provider value={{ isLogged, signup, login, isUser }}>
      {children}
    </AuthContext.Provider>
  );
};
