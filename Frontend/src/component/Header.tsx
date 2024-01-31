"use client";
import { Box, Button, Drawer, Modal, Stack, Typography } from "@mui/material";
import { Logo } from "../../public/Logo";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CustomInput } from ".";
import React, { useState } from "react";
import DrawerFunction from "./DrawerFunction";
import NewLogin from "./NewLogin";
type Anchor = "right";
export const Header = () => {
  const pathname = usePathname();
  const [drawer, setDrawer] = useState(false);
  const [open, setOpen] = useState(false);
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
      px="24px"
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
            fontSize: "14px",
            fontWeight: "700",
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
            color: pathname.includes("Menu") ? "#18BA51" : "black",
            marginLeft: "24px",
            fontSize: "14px",
            fontWeight: "700",
            lineHeight: "16px",
            padding: "16px",
            textDecoration: "none",
          }}
        >
          ХООЛНЫ ЦЭС
        </Link>
        <Link
          href={"/"}
          style={{
            marginLeft: "24px",
            fontSize: "14px",
            fontWeight: "700",
            lineHeight: "16px",
            padding: "16px",
            textDecoration: "none",
            color: "black",
          }}
        >
          ХҮРГЭЛТИЙН БҮС
        </Link>
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap="8px"
          borderRadius="8px"
        >
          <CustomInput type="search" placeholder="Хайх" />
        </Stack>
        <Button
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
              onClick={() => {}}
            >
              Сагс
            </Typography>
          </Stack>
        </Button>
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
              color: open ? "#18BA51" : "black",
            }}
          />
          <Typography
            style={{
              color: open ? "#18BA51" : "black",
              display: "flex",
              alignItems: "center",
              fontSize: "18px",
              fontWeight: "700",
              lineHeight: "18px",
              textDecoration: "none",
            }}
            onClick={() => {
              setOpen(true);
            }}
          >
            Нэвтрэх
          </Typography>
          <Modal
            open={open}
            onClose={() => {
              setOpen(false);
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
              {open && <NewLogin />}
            </Box>
          </Modal>
        </Stack>
      </Stack>
    </Stack>
  );
};
