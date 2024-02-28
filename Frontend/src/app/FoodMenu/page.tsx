"use client";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AuthContext } from "@/component/AupthProvider";
import Category from "@/component/Category";
import NewfoodCard from "@/component/NewFoodCard";

export default function DoodMenu() {
  const { newCategory, setNewCategory, newFood, setNewFood } =
    useContext(AuthContext);
  const titleMap = [
    {
      title: "Breakfast",
    },
    {
      title: "Soup",
    },
    {
      title: "Main course",
    },
    {
      title: "Desserts",
    },
  ];
  const [titles, setTitles] = useState(titleMap[0]);
  return (
    <Stack px="240px" direction="row" width="100%" gap="30px">
      <Stack width="258px" gap="16px" minHeight="500px">
        <Typography fontSize="22px" fontWeight="700">
          Food Menu
        </Typography>
        {titleMap.map((item, kk) => {
          return (
            <Stack>
              <Stack
                key={kk}
                direction="row"
                width="100%"
                height="40px"
                borderColor="#D6D8DB"
                border={1}
                borderRadius="8px"
                px="20px"
                justifyContent="space-between"
                alignItems="center"
                onClick={() => {
                  setTitles(item);
                }}
                style={{
                  backgroundColor:
                    item.title === titles.title ? "#18BA51" : "white",
                  color: item.title === titles.title ? "white" : "black",
                }}
              >
                <Typography
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    textDecoration: "none",
                    color: item.title === titles.title ? "white" : "black",
                  }}
                >
                  {item.title}
                </Typography>
                <MoreVertIcon />
              </Stack>
            </Stack>
          );
        })}
        <Stack
          direction="row"
          fontSize="18px"
          fontWeight="500"
          height="40px"
          border={1}
          justifyContent="center"
          alignItems="center"
          gap="8px"
          borderRadius="8px"
          color="#5E6166"
          onClick={() => {
            setNewCategory(true);
          }}
        >
          <AddIcon />
          <Typography>Create new category</Typography>
        </Stack>
      </Stack>
      <Stack width="100%" paddingLeft="40px">
        <Stack direction="row" justifyContent="space-between">
          <Typography fontSize="22px" fontWeight="700">
            {titles.title}
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
        <Stack alignItems="center">
          <AddIcon
            style={{ width: "47px", height: "47px", color: "#18BA51" }}
          />
          <Typography>Уучлаарай, Таны меню хоосон байна.</Typography>
        </Stack>
      </Stack>
      <Modal open={newCategory}>
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
          {newCategory && <Category />}
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
