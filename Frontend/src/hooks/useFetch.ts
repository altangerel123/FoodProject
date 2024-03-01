// import { useEffect, useState } from "react";

// export const useFetch = <T>(url: string) => {
//   const [data, setData] = useState<T[]>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     try{
//         const res = await fetch(url);
//         const json = await res.json();
//         setData(json);
//     } catch(error){
//         setError(error);
//     }finally{
//     setLoading(false)
//     }
//   const refetch = () => {
//     fetchData()
//   }
//   useEffect(()=> {
//     fetchData();
//   },[url]);
//   return{data,loading,error,refetch};
// };
