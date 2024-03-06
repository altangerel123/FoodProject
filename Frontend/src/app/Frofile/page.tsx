"use client";
import { Box, Modal, Stack, TextField, Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import LogoutIcon from "@mui/icons-material/Logout";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import { ChangeEvent, useContext, useEffect } from "react";
import { AuthContext } from "@/component/AupthProvider";
import { Logout } from "@/component/Signup/LogOut";

export default function Frofile() {
  const {
    profile,
    logOut,
    setLogOut,
    selectedFile,
    setSelectedFile,
    imageUrl,
    setImageUrl,
  } = useContext(AuthContext);
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
        console.log(data);
        setImageUrl(data.secure_url);
      } catch (error) {
        console.error("Image upload error:", error);
      }
    }
  };
  return (
    <Stack
      width="100%"
      direction="row"
      justifyContent="center"
      sx={{ my: "100px" }}
    >
      <Stack width="392px">
        <Stack gap="30px">
          <Stack>
            <Stack direction="row" alignItems="end">
              {imageUrl && (
                <Stack width="120px" position="relative">
                  <img
                    src={imageUrl}
                    onClick={() => {
                      handleImageChange;
                    }}
                    width="120px"
                    height="120px"
                    style={{ borderRadius: "100%" }}
                  ></img>
                </Stack>
              )}
              <ModeEditOutlinedIcon
                onClick={handleImageInput}
                sx={{
                  color: "#18BA51",
                  // position: "absolute",
                  // right: "0",
                  // bottom: "0",
                  // zIndex: 1,
                }}
              />
              <TextField
                type="file"
                onChange={handleImageChange}
                variant="outlined"
              />
            </Stack>
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
