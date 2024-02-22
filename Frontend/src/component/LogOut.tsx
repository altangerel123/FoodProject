import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "./AupthProvider";

export function Logout() {
  const { logOut, signOut, setLogOut } = useContext(AuthContext);
  return (
    <Stack direction="row" justifyContent="center">
      <Stack>
        <Typography fontSize="20px" fontWeight="600" p="30px">
          Та системээс гарахдаа итгэлтэй байна уу?
        </Typography>
        <Stack direction="row" bgcolor="#18BA5133">
          <Button
            sx={{
              color: "black",
              width: "50%",
              display: "flex",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: "600",
              variant: "outlined",
              borderRadius: "0 0 0 20px",
              "&:hover": {
                backgroundColor: "#18BA51",
                color: "white",
                borderRadius: "0 0 0 20px",
              },
            }}
          >
            Үгүй
          </Button>
          <Button
            sx={{
              color: "black",
              width: "50%",
              display: "flex",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: "600",
              variant: "outlined",
              borderRadius: "0 0 20px 0",
              "&:hover": {
                backgroundColor: "#18BA51",
                color: "white",
                borderRadius: "0 0 20px 0",
              },
            }}
            onClick={() => {
              setLogOut(logOut);
            }}
          >
            Тийм
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
