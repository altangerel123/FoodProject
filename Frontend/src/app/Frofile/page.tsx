"use client";
import { Stack, Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import LogoutIcon from "@mui/icons-material/Logout";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import { useContext } from "react";
import { AuthContext } from "@/component/AupthProvider";

export default function Frofile() {
  const { signOut } = useContext(AuthContext);
  const FrofileCard = [
    {
      icon1: <PersonOutlineIcon />,
      title: "Таны нэр",
      text: "УгтахБаяр",
      icon2: <ModeEditOutlinedIcon />,
    },
    {
      icon1: <LocalPhoneOutlinedIcon />,
      title: "Таны нэр",
      text: "УгтахБаяр",
      icon2: <ModeEditOutlinedIcon />,
    },
    {
      icon1: <ForwardToInboxOutlinedIcon />,
      title: "Таны нэр",
      text: "УгтахБаяр",
      icon2: <ModeEditOutlinedIcon />,
    },
  ];
  return (
    <Stack width="100%" direction="row" justifyContent="center">
      <Stack width="392px">
        <Stack gap={"30px"}>
          <img width="120px" height="120px" src="" />
          <Typography fontSize="28px" fontWeight="700">
            УгтахБаяр
          </Typography>
        </Stack>
        <Stack gap={"30px"}>
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
                      {index.text}
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
    </Stack>
  );
}
