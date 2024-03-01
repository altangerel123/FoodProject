// import { useFetch } from "@/hooks/useFetch";
// import {
//   Card,
//   CardMedia,
//   CircularProgress,
//   Container,
//   Grid,
//   Stack,
//   Typography,
// } from "@mui/material";

// const Page = () => {
//   const { data, loading, error, refetch } = useFetch(
//     "http:/jsonplaceholder.typicode.com.posts"
//   );
//   if (loading) {
//     return (
//       <Stack
//         alignItems="center"
//         justifyContent="center"
//         height="100vh"
//         bgcolor="#eee"
//       >
//         <CircularProgress />
//       </Stack>
//     );
//   }
//   if (error) {
//     return (
//       <Stack>
//         <Container>
//           <Typography>Error: {error.message}</Typography>
//         </Container>
//       </Stack>
//     );
//   }
//   return;
// };
