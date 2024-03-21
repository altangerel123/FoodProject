"use client";
import { backend } from "@/common";
import { toast } from "react-toastify";
import {
  ChangeEvent,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { date } from "yup";
import { Axios, AxiosError } from "axios";
type UsersType = {
  name: string;
  email: string;
  password: string;
  address: string;
  frofile: string;
};
type foodType = {
  foodName: string;
  entrance: string;
  price: string;
  discount: string;
};
type menuType = {
  menu: string;
};
type loginType = {
  email: string;
  password: string;
};
type profileType = {
  profile: string;
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
    foodName: string;
    entrance: string;
    prices: string;
    discount: string;
  }[];

  setGetCategory: any;
  logOut: boolean;
  setLogOut: Dispatch<SetStateAction<boolean>>;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  selectedFile: File | null;
  setSelectedFile: Dispatch<SetStateAction<File | null>>;
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
  ismenu: { menu: string }[];
  setIsmenu: Dispatch<SetStateAction<never[]>>;
  imageModel: boolean;
  setImageModel: Dispatch<SetStateAction<boolean>>;
  imageUrl: string;
  setImageUrl: Dispatch<SetStateAction<string>>;
  handleImageChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleImageInput: () => Promise<void>;
  productModel: boolean;
  setProductModal: Dispatch<SetStateAction<boolean>>;
  profileImage: any;
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
  const [newCategory, setNewCategory] = useState(false);
  const [newFood, setNewFood] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [getCategory, setGetCategory] = useState([]);
  const [isCard, setIsCard] = useState(false);
  const [ismenu, setIsmenu] = useState([]);
  const [imageModel, setImageModel] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [productModel, setProductModal] = useState(false);
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setSelectedFile(event.target.files[0]);
  };
  const handleImageInput = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dluvjoh6c/upload?upload_preset=iiart9je",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        setImageUrl(data.secure_url);
        return data.secure_url;
      } catch (error) {
        console.error("Image upload error:", error);
      }
    }
  };
  const signup = async (type: UsersType) => {
    try {
      const { data } = await backend.post("/signup", type);
      const { token } = data;
      localStorage.setItem("token", token);
      router.push("/Home");
      setIsLoggedIn(true);
    } catch (error) {
      toast.error("Aldaa garlaa");
    }
  };
  const login = async (type: loginType) => {
    try {
      const { data } = await backend.post("/login", type);
      const { token } = data;
      localStorage.setItem("token", token);
      router.push("/Home");
      setIsLoggedIn(true);
      toast.success("Амжилттай нэвтэрлээ");
    } catch (error) {
      if (error) {
        toast.error("Aldaa garlaa");
      }
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
  const profileImage = async (url: string) => {
    try {
      const { data } = await backend.post("/profileImage", {
        profile: url,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    handleImageInput();
  });
  const foodpost = async (type: foodType) => {
    try {
      const { data } = await backend.post("/foodRouter/foodpost", type);
      console.log(data, "hhh");
    } catch (error) {
      toast.error("Хоол нэмхэд алдаа гарлаа");
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
      console.log(error);
    }
  };
  const menupost = async (type: menuType) => {
    try {
      const { data } = await backend.post("/foodRouter/menupost", type);
      toast.success("Menu шинээр нэмэгдлээ");
    } catch (error) {
      console.log(error);
    }
  };
  const menuget = async () => {
    try {
      const { data } = await backend.get("/foodRouter/menuget", {
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
    menuget();
  }, []);
  useEffect(() => {
    handleImageInput();
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
        profileImage,
        handleImageChange,
        handleImageInput,
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
        imageModel,
        setImageModel,
        imageUrl,
        setImageUrl,
        productModel,
        setProductModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
