"use client";
import { Box, Modal, Stack, Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import LogoutIcon from "@mui/icons-material/Logout";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import { useContext } from "react";
import { AuthContext } from "@/component/AupthProvider";
import { Logout } from "@/component/LogOut";

export default function Frofile() {
  const { signOut, profile, logOut, setLogOut } = useContext(AuthContext);
  const FrofileCard = [
    {
      icon1: <PersonOutlineIcon />,
      title: "Таны нэр",
      icon2: <ModeEditOutlinedIcon />,
    },
    {
      icon1: <LocalPhoneOutlinedIcon />,
      title: "Утасны дугаар",
      icon2: <ModeEditOutlinedIcon />,
    },
    {
      icon1: <ForwardToInboxOutlinedIcon />,
      title: "Имэйл хаяг",
      icon2: <ModeEditOutlinedIcon />,
    },
  ];

  // console.log(profile, "HHHHH");
  return (
    <Stack
      width="100%"
      direction="row"
      justifyContent="center"
      sx={{ my: "100px" }}
    >
      <Stack width="392px">
        <Stack gap="30px">
          <Stack direction="row" alignItems="end">
            <img width="120px" height="120px" src="" />
            <ModeEditOutlinedIcon sx={{ color: "#18BA51" }} />
          </Stack>
          <Typography fontSize="28px" fontWeight="700">
            {profile && profile.name}
          </Typography>
        </Stack>
        <Stack gap="30px">
          {FrofileCard.map((index, item) => {
            return (
              <Stack
                key={item}
                sx={{ p: "10px 20px" }}
                direction="row"
                bgcolor="#F6F6F6"
                borderRadius="4px"
                justifyContent="space-between"
              >
                <Stack direction="row" gap="15px">
                  <Typography
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="48px"
                    height="48px"
                    borderRadius="100%"
                    bgcolor="white"
                  >
                    {index.icon1}
                  </Typography>
                  <Stack>
                    <Typography fontSize="12px" fontWeight="400">
                      {index.title}
                    </Typography>
                    <Typography fontSize="16px" fontWeight="400">
                      {profile?.name}
                    </Typography>
                  </Stack>
                </Stack>
                <Typography display="flex" color="#18BA51" alignItems="center">
                  {index.icon2}
                </Typography>
              </Stack>
            );
          })}
          <Stack direction="row" gap="15px" sx={{ p: "10px 20px" }}>
            <ManageHistoryIcon sx={{ width: "48px" }} />
            <Typography>Захиалгын түүх</Typography>
          </Stack>
          <Stack
            direction="row"
            gap="15px"
            sx={{ p: "10px 20px" }}
            onClick={signOut}
          >
            <LogoutIcon sx={{ width: "48px" }} />
            <Typography>Гарах</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Modal
        open={logOut}
        onClose={() => {
          setLogOut(false);
        }}
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            width: "384px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: "20px",
          }}
        >
          {logOut && <Logout />}
        </Box>
      </Modal>
    </Stack>
  );
}
