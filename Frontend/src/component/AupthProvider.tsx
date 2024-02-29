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
import { Token } from "@mui/icons-material";
type UsersType = {
  name: String;
  email: String;
  password: String;
  address: String;
};
type categoryType = {
  foodName: String;
  menu: String;
  entrance: String;
  price: String;
  discount: String;
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
  category: (type: categoryType) => void;
  Profile: () => Promise<void>;
  signOut: () => Promise<void>;
  setProfile: any;
  profile: any;
  getCategory: any;
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
  categoryGet: () => Promise<void>;
  isCard: boolean;
  setIsCard: Dispatch<SetStateAction<boolean>>;
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
  const [getCategory, setGetCategory] = useState();
  const [isCard, setIsCard] = useState(false);

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

  const Profile = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await backend.get("/profile", {
        headers: {
          Authorization: token,
        },
      });
      setProfile(data[0]);
    } catch (error) {
      toast;
    }
  };
  const category = async (type: categoryType) => {
    try {
      const { data } = await backend.post("/category", type);

      console.log(data);
      toast.success("Success", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
  const categoryGet = async () => {
    try {
      const { data } = await backend.get("/categoryGet");
      const { cate } = data;
      setGetCategory(cate);
      setNewFood(true);
      console.log(data);
    } catch (error) {
      toast;
    }
  };

  useEffect(() => {
    setIsLoggedIn(true);
    Profile();
  }, []);
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
        category,
        signup,
        login,
        isUser,
        isLoggedIn,
        signOut,
        open,
        setOpen,
        Profile,
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
        categoryGet,
        getCategory,
        setGetCategory,
        isCard,
        setIsCard,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
