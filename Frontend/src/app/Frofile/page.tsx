"use client";
import { Box, Modal, Stack, TextField, Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import LogoutIcon from "@mui/icons-material/Logout";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import { AuthContext } from "@/component/AupthProvider";
import { Logout } from "@/component/Signup/LogOut";
import ImageModel from "@/component/Signup/ImageModel";
import { useContext } from "react";

export default function Frofile() {
  const {
    profile,
    logOut,
    setLogOut,
    imageUrl,
    productModel,
    setProductModal,
    profileImage,
  } = useContext(AuthContext);
  return (
    <Stack
      width="100%"
      direction="row"
      justifyContent="center"
      sx={{ my: "100px" }}
    >
      <Modal open={productModel}>
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
            p: "20px",
          }}
        >
          <Typography
            display="flex"
            justifyContent="end"
            onClick={() => {
              setProductModal(false);
            }}
          >
            X
          </Typography>
          {productModel && <ImageModel />}
        </Box>
      </Modal>
      <Stack width="392px">
        <Stack gap="30px">
          <Stack direction="row" alignItems="end">
            <Stack
              borderRadius="100%"
              direction="row"
              justifyContent="end"
              alignItems="end"
              width="120px"
              height="120px"
              border={1}
              position="relative"
              onClick={() => {
                setProductModal(true);
              }}
            >
              {imageUrl && (
                <img
                  style={{
                    borderRadius: "100%",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                  src={profileImage && profileImage.profile}
                ></img>
              )}
            </Stack>
            <ModeEditOutlinedIcon sx={{ color: "#18BA51" }} />
          </Stack>
          <Typography fontSize="28px" fontWeight="700">
            {profile && profile.name}
          </Typography>
        </Stack>
        <Stack gap="30px">
          <Stack
            sx={{ p: "10px 20px" }}
            direction="row"
            bgcolor="#F6F6F6"
            borderRadius="4px"
            justifyContent="space-between"
          >
            <Stack direction="row" gap="30px">
              <PersonOutlineIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "100%",
                  bgcolor: "white",
                }}
              />
              <Stack>
                <Typography fontSize="12px" fontWeight="400">
                  Таны нэр
                </Typography>
                <Typography fontSize="16px" fontWeight="400">
                  {profile?.name}
                </Typography>
              </Stack>
            </Stack>
            <ModeEditOutlinedIcon
              sx={{
                display: "flex",
                color: "#18BA51",
                alignItems: "center",
              }}
            />
          </Stack>
          <Stack
            sx={{ p: "10px 20px" }}
            direction="row"
            bgcolor="#F6F6F6"
            borderRadius="4px"
            justifyContent="space-between"
          >
            <Stack direction="row" gap="30px">
              <LocalPhoneOutlinedIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "100%",
                  bgcolor: "white",
                }}
              />
              <Stack>
                <Typography fontSize="12px" fontWeight="400">
                  Утасны дугаар
                </Typography>
                <Typography fontSize="16px" fontWeight="400">
                  {profile?.address}
                </Typography>
              </Stack>
            </Stack>
            <ModeEditOutlinedIcon
              sx={{
                display: "flex",
                color: "#18BA51",
                alignItems: "center",
              }}
            />
          </Stack>
          <Stack
            sx={{ p: "10px 20px" }}
            direction="row"
            bgcolor="#F6F6F6"
            borderRadius="4px"
            justifyContent="space-between"
          >
            <Stack direction="row" gap="30px">
              <ForwardToInboxOutlinedIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "100%",
                  bgcolor: "white",
                }}
              />
              <Stack>
                <Typography fontSize="12px" fontWeight="400">
                  Имэйл хаяг
                </Typography>
                <Typography fontSize="16px" fontWeight="400">
                  {profile?.email}
                </Typography>
              </Stack>
            </Stack>
            <ModeEditOutlinedIcon
              sx={{
                display: "flex",
                color: "#18BA51",
                alignItems: "center",
              }}
            />
          </Stack>
          <Stack direction="row" gap="15px" sx={{ p: "10px 20px" }}>
            <ManageHistoryIcon sx={{ width: "48px" }} />
            <Typography>Захиалгын түүх</Typography>
          </Stack>
          <Stack
            direction="row"
            gap="15px"
            sx={{ p: "10px 20px" }}
            onClick={() => {
              setLogOut(true);
            }}
          >
            <LogoutIcon sx={{ width: "48px" }} />
            <Typography>Гарах</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Modal open={logOut}>
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
