"use client";
import { Box, Button, Grid, Modal, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";

import { AuthContext } from "@/component/AupthProvider";
import NewfoodCard from "@/component/Card/NewFoodCard";
import CategoryMap from "@/component/Category/CategoryMap";
import FoodModel from "@/component/Card/FoodModel";
export default function FoodMenu() {
  const { newFood, setNewFood, setOpen, open, isCard } =
    useContext(AuthContext);
  return (
    <Stack px="240px" direction="row" width="100%" gap="30px">
      <CategoryMap />
      <Stack width="100%" paddingLeft="40px">
        <Stack direction="row" justifyContent="space-between">
          <Typography fontSize="22px" fontWeight="700"></Typography>
          <Button
            variant="contained"
            sx={{ fontSize: "16px", fontWeight: "400" }}
            onClick={() => {
              setNewFood(true);
            }}
          >
            Add new food
          </Button>
        </Stack>
        {!isCard && (
          <Stack alignItems="center">
            <AddIcon
              style={{ width: "47px", height: "47px", color: "#18BA51" }}
            />
            <Typography>Уучлаарай, Таны меню хоосон байна.</Typography>
          </Stack>
        )}
        {isCard && <FoodModel />}
      </Stack>
      <Modal open={open}>
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
          <Typography
            display="flex"
            justifyContent="end"
            onClick={() => {
              setOpen(false);
            }}
          >
            X
          </Typography>
          {open && <FoodModel />}
        </Box>
      </Modal>
      <Modal open={newFood}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: "20px",
          }}
        >
          {newFood && <NewfoodCard />}
        </Box>
      </Modal>
    </Stack>
  );
}
