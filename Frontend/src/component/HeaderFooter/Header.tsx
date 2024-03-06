"use client";
import { Box, Button, Drawer, Modal, Stack, Typography } from "@mui/material";
import { Logo } from "../../../public/Logo";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { CustomInput } from "..";
import React, { useContext, useState } from "react";
import DrawerFunction from "../DrawerFunction";
import NewLogin from "../Signup/NewLogin";
import { AuthContext } from "../AupthProvider";
type Anchor = "right";
export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isLogin, setIsLogin, isLoggedIn, drawer, setDrawer } =
    useContext(AuthContext);
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <DrawerFunction />
    </Box>
  );
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      px="240px"
      py="8px"
      sx={{ bgcolor: "white", height: "75px" }}
    >
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Logo />
        <Link
          href={"/Home"}
          style={{
            color: pathname.includes("Home") ? "#18BA51" : "black",
            marginLeft: "24px",
            fontWeight: "700",
            fontSize: "17px",
            lineHeight: "16px",
            padding: "16px",
            textDecoration: "none",
          }}
        >
          НҮҮР
        </Link>
        <Link
          href={"/Menu"}
          style={{
            // color: pathname.includes("Menu") ? "#18BA51" : "black",
            marginLeft: "24px",
            fontWeight: "700",
            fontSize: "17px",
            lineHeight: "16px",
            padding: "16px",
            textDecoration: "none",
             color: pathname.includes("Menu") ? "#18BA51" : "black",
          }}
        >
          ХООЛНЫ ЦЭС
        </Link>
        <Link
          href={"/Location"}
          style={{
            marginLeft: "24px",
            fontWeight: "700",
            fontSize: "17px",
            lineHeight: "16px",
            padding: "16px",
            textDecoration: "none",
            color: pathname.includes("Location") ? "#18BA51" : "black",
          }}
        >
          ХҮРГЭЛТИЙН БҮС
        </Link>
        {isLoggedIn && <Link
          href={"/Admin"}
          style={{
            marginLeft: "24px",
            fontWeight: "700",
            fontSize: "17px",
            lineHeight: "16px",
            padding: "16px",
            textDecoration: "none",
            color: pathname.includes("Admin") ? "#18BA51" : "black",
          }}
        >
          ADMIN
        </Link>}
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap="8px"
          borderRadius="8px"
        >
          <CustomInput type="search" placeholder="Хайх" onClick={()=> {router.push("/Search") }}/>
        </Stack>
        <Stack
          onClick={() => {
            setDrawer(true);
          }}
        >
          <Stack direction="row" gap="8px" sx={{ px: "16px", py: "8px" }}>
            <ShoppingBasketOutlinedIcon
              sx={{
                width: "24px",
                height: "24px",
                color: drawer ? "#18BA51" : "black",
              }}
            />
            <Typography
              sx={{ color: drawer ? "#18BA51" : "black" }}
              display="flex"
              alignItems="center"
              fontWeight="700"
              fontSize="18px"
            >
              Сагс
            </Typography>
          </Stack>
        </Stack>
        <Drawer
          anchor={"right"}
          open={drawer}
          onClose={() => {
            setDrawer(false);
          }}
        >
          <DrawerFunction />
        </Drawer>
        <Stack
          direction="row"
          justifyContent="center"
          gap="8px"
          sx={{ px: "16px", py: "8px" }}
        >
          <PermIdentityOutlinedIcon
            style={{
              color: isLoggedIn ? "#18BA51" : "black",
            }}
          />
          {!isLoggedIn && (
            <Typography
              style={{
                color: "black",
                display: "flex",
                alignItems: "center",
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "18px",
                textDecoration: "none",
              }}
              onClick={() => {
                setIsLogin(true);
              }}
            >
              Нэвтрэх
            </Typography>
          )}
          {isLoggedIn && (
            <Link
              href={"/Frofile"}
              style={{
                color: isLoggedIn ? "#18BA51" : "black",
                display: "flex",
                alignItems: "center",
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "18px",
                textDecoration: "none",
              }}
            >
              Хэрэглэгч
            </Link>
          )}
          <Modal
            open={isLogin}
            onClose={() => {
              setIsLogin(false);
            }}
          >
            <Box
              sx={{
                position: "absolute" as "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              {isLogin && <NewLogin />}
            </Box>
          </Modal>
        </Stack>
      </Stack>
    </Stack>
  );
};
