"use client";
import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function DoodMenu() {
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
    <Stack px="240px" direction="row" width="100%">
      <Stack width="258px" gap="16px">
        <Typography fontSize="22px" fontWeight="700">
          Food Menu
        </Typography>
        {titleMap.map((item, index) => {
          return (
            <Stack>
              <Stack
                key={index}
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
        >
          <AddIcon />
          <Typography>Create new category</Typography>
        </Stack>
      </Stack>
      <Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography>{titles.title}</Typography>
          <Button sx={{ maxWidth: "130px" }}>Add new food</Button>
        </Stack>
        <Stack width="100%" justifyContent="center">
          <AddIcon
            style={{ width: "47px", height: "47px", color: "#18BA51" }}
          />
          <Typography>Уучлаарай, Таны меню хоосон байна.</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
