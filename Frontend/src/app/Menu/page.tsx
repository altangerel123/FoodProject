"use client";
import Card1 from "@/component/Card1";
import { Stack, Typography } from "@mui/material";
import { useState } from "react";
export default function Menu() {
  const titleMap = [
    {
      title: "Main course",
    },
    {
      title: "Appetizers",
    },
    {
      title: "Beverage",
    },
    {
      title: "On sale",
    },
  ];
  const [titles, setTitles] = useState(titleMap[0]);
  return (
    <Stack gap="80px" px="240px">
      <Stack width="100%" direction="row" justifyContent="space-between">
        {titleMap.map((item, index) => {
          return (
            <Stack key={index} direction="row">
              <Typography
                fontSize="18px"
                fontWeight="600"
                border={1}
                borderRadius="16px"
                width="300px"
                display="flex"
                justifyContent="center"
                sx={{ padding: "8px 70px" }}
                onClick={() => {
                  setTitles(item);
                }}
                style={{
                  backgroundColor:
                    item.title === titles.title ? "#18BA51" : "white",
                  color: item.title === titles.title ? "white" : "black",
                }}
              >
                {item.title}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
      <Stack gap="80px">
        <Card1 />
        <Card1 />
      </Stack>
    </Stack>
  );
}
