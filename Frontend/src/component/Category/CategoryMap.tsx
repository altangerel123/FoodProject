"use client";
import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AuthContext } from "../AupthProvider";

export default function CategoryMap() {
  const { ismenu, setNewCategory } = useContext(AuthContext);
  return (
    <Stack width="258px" gap="16px" minHeight="500px">
      <Typography fontSize="22px" fontWeight="700">
        Food Menu
      </Typography>
      {ismenu.map((item) => {
        return (
          <Stack>
            <Stack
              direction="row"
              width="100%"
              height="40px"
              borderColor="#D6D8DB"
              border={1}
              borderRadius="8px"
              px="20px"
              justifyContent="space-between"
              alignItems="center"
              // onClick={() => {
              //   setTitles();
              // }}
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
                  color: item.menu === item.menu ? "white" : "black",
                }}
              >
                {item.menu}
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
  );
}
