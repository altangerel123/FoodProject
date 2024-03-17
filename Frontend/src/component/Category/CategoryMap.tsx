"use client";
import { Box, Modal, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AuthContext } from "../AupthProvider";
import CategoryModel from "./CategoryModel";

export default function CategoryMap() {
  const { ismenu, setNewCategory, newCategory } = useContext(AuthContext);
  return (
    <Stack width="258px" gap="16px" minHeight="500px">
      <Typography fontSize="22px" fontWeight="700">
        Food Menu
      </Typography>
      {ismenu.map((item, key) => {
        return (
          <Stack
            key={key}
            direction="row"
            width="100%"
            height="40px"
            borderColor="#D6D8DB"
            border={1}
            borderRadius="8px"
            px="20px"
            justifyContent="space-between"
            alignItems="center"
            style={{
              backgroundColor: item.menu === item.menu ? "#18BA51" : "white",
              color: item.menu === item.menu ? "white" : "black",
            }}
          >
            <Typography
              style={{
                fontSize: "18px",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              {item.menu}
            </Typography>
            <MoreVertIcon />
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
          {newCategory && <CategoryModel />}
        </Box>
      </Modal>
    </Stack>
  );
}
