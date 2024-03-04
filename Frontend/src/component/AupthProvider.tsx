"use client";
import { backend } from "@/common";
import { toast } from "react-toastify";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
type UsersType = {
  name: String;
  email: String;
  password: String;
  address: String;
};
type foodType = {
  foodName: String;
  entrance: String;
  price: String;
  discount: String;
};
type menuType = {
  menu: String;
};
type loginType = {
  email: String;
  password: String;
};
type AuthContextType = {
  isUser: boolean;
  isLoggedIn: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  signup: (type: UsersType) => void;
  login: (type: loginType) => void;
  foodpost: (type: foodType) => void;
  userprofile: () => Promise<void>;
  signOut: () => Promise<void>;
  setProfile: any;
  profile: any;
  getCategory: {
    foodName: String;
    entrance: String;
    menu: String;
    prices: String;
    discount: String;
  }[];

  setGetCategory: any;
  logOut: boolean;
  setLogOut: Dispatch<SetStateAction<boolean>>;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  selectedFile: File | null;
  setSelectedFile: Dispatch<SetStateAction<File | null>>;
  imageUrl: null;
  setImageUrl: any;
  newCategory: boolean;
  setNewCategory: Dispatch<SetStateAction<boolean>>;
  newFood: boolean;
  setNewFood: Dispatch<SetStateAction<boolean>>;
  drawer: boolean;
  setDrawer: Dispatch<SetStateAction<boolean>>;
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
  foodget: () => Promise<void>;
  isCard: boolean;
  setIsCard: Dispatch<SetStateAction<boolean>>;
  menupost: (type: menuType) => Promise<void>;
  menuget: () => Promise<void>;
  ismenu: { menu: String }[];
  setIsmenu: Dispatch<SetStateAction<never[]>>;
};
export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isUser, setIsUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [profile, setProfile] = useState();
  const [logOut, setLogOut] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [newCategory, setNewCategory] = useState(false);
  const [newFood, setNewFood] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [getCategory, setGetCategory] = useState([]);
  const [isCard, setIsCard] = useState(false);
  const [ismenu, setIsmenu] = useState([]);

  const signup = async (type: UsersType) => {
    try {
      const { data } = await backend.post("/signup", type);
      const { token } = data;
      localStorage.setItem("token", token);
      router.push("/Home");
      setIsLoggedIn(true);
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
      router.push("/Home");
      setIsLoggedIn(true);
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

  const userprofile = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await backend.get("/userprofile", {
        headers: {
          Authorization: token,
        },
      });
      setProfile(data[0]);
    } catch (error) {
      toast;
    }
  };
  const foodpost = async (type: foodType) => {
    try {
      const { data } = await backend.post("/foodpost", type);
      console.log(data);
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
  const foodget = async () => {
    try {
      const { data } = await backend.get("/foodget", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setGetCategory(data);
      setNewFood(true);
    } catch (error) {
      toast;
    }
  };
  const menupost = async (type: menuType) => {
    try {
      const { data } = await backend.post("/menupost", type);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const menuget = async () => {
    try {
      const { data } = await backend.get("/menuget", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setIsmenu(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsLoggedIn(true);
    userprofile();
  }, []);
  useEffect(() => {});

  const signOut = async () => {
    await localStorage.removeItem("token");
    setIsLoggedIn(false);
    setLogOut(false);
    router.push("/");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        signup,
        login,
        isUser,
        isLoggedIn,
        signOut,
        open,
        setOpen,
        userprofile,
        setProfile,
        profile,
        logOut,
        setLogOut,
        setIsLoggedIn,
        selectedFile,
        setSelectedFile,
        imageUrl,
        setImageUrl,
        newCategory,
        setNewCategory,
        newFood,
        setNewFood,
        drawer,
        setDrawer,
        isLogin,
        setIsLogin,
        foodget,
        getCategory,
        setGetCategory,
        isCard,
        setIsCard,
        menupost,
        foodpost,
        menuget,
        ismenu,
        setIsmenu,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
