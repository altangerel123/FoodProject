"use client";
import Card2 from "@/component/Card2";
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
    <Stack>
      <Stack direction="row" p="32px" gap="100px" justifyContent="center">
        {titleMap.map((item, index) => {
          return (
            <Stack key={index} direction="row">
              <Typography
                borderColor="#D6D8DB"
                fontSize="18px"
                fontWeight="600"
                border={1}
                borderRadius="16px"
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
      <Stack gap="80px" justifyContent="center" alignItems="center">
        <Card2 />
        <Card2 />
        <Card2 />
      </Stack>
    </Stack>
  );
}
