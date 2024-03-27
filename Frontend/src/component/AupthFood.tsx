// "use client";

// import {
//   ChangeEvent,
//   Dispatch,
//   PropsWithChildren,
//   SetStateAction,
//   createContext,
//   useState,
// } from "react";

// type menuType = {
//   menu: string;
// };
// type AuthContextType = {
//   selectedFile: File | null;
//   setSelectedFile: Dispatch<SetStateAction<File | null>>;
//   selectedFileFoood: File | null;
//   SetSelectedFileFoood: Dispatch<SetStateAction<File | null>>;
//   imageUrl: string;
//   setImageUrl: Dispatch<SetStateAction<string>>;
//   imageUrlFood: string;
//   setImageUrlFood: Dispatch<SetStateAction<string>>;

//   foodpost: (type: foodType) => void;
//   getCategory: {
//     foodName: string;
//     entrance: string;
//     price: string;
//     discount: string;
//   }[];
//   menupost: (type: menuType) => Promise<void>;
// };
// export const AuthContext = createContext<AuthContextType>(
//   {} as AuthContextType
// );

// export const AupthFood = ({ children }: PropsWithChildren) => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [selectedFileFoood, SetSelectedFileFoood] = useState<File | null>(null);
//   const [imageUrl, setImageUrl] = useState("");
//   const [imageUrlFood, setImageUrlFood] = useState("");
//   const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
//     if (!event.target.files) return;
//     setSelectedFile(event.target.files[0]);
//   };
//   const handleImageInput = async () => {
//     if (selectedFile) {
//       try {
//         const formData = new FormData();
//         formData.append("file", selectedFile);
//         const response = await fetch(
//           "https://api.cloudinary.com/v1_1/dluvjoh6c/upload?upload_preset=iiart9je",
//           {
//             method: "POST",
//             body: formData,
//           }
//         );
//         const data = await response.json();
//         setImageUrlFood(data.secure_url);
//         return data.secure_url;
//       } catch (error) {
//         console.error("Image upload error:", error);
//       }
//     }
//   };

//   const handleImageChangeFood = (event: ChangeEvent<HTMLInputElement>) => {
//     if (!event.target.files) return;
//     SetSelectedFileFoood(event.target.files[0]);
//   };
//   const handleImageInputFood = async () => {
//     if (selectedFileFoood) {
//       try {
//         const formData = new FormData();
//         formData.append("file", selectedFileFoood);
//         const response = await fetch(
//           "https://api.cloudinary.com/v1_1/dluvjoh6c/upload?upload_preset=iiart9je",
//           {
//             method: "POST",
//             body: formData,
//           }
//         );
//         const data = await response.json();
//         setImageUrl(data.secure_url);
//         return data.secure_url;
//       } catch (error) {
//         console.error("Image upload error:", error);
//       }
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         selectedFile,
//         setSelectedFile,
//         selectedFileFoood,
//         SetSelectedFileFoood,
//         imageUrl,
//         setImageUrl,
//         imageUrlFood,
//         setImageUrlFood,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
