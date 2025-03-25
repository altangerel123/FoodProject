"use client";

import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../component/AupthProvider";
import NewfoodCard from "../../component/Card/NewFoodCard";
import CategoryMap from "../../component/Category/CategoryMap";
import FoodModel from "../../component/Card/FoodModel";
export default function FoodMenu() {
  const { newFood, setNewFood } = useContext(AuthContext);
  return (
    <Stack px="240px" direction="row" width="100%" gap="30px">
      <CategoryMap />
      <Stack width="100%" paddingLeft="40px">
        <Stack direction="row" justifyContent="space-between">
          <Typography fontSize="22px" fontWeight="700">
            New Food
          </Typography>
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
        <FoodModel />
      </Stack>
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
