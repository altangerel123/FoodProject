"use client";

import { Stack, Typography } from "@mui/material";
export default function Card1() {
  const CardMap = [
    {
      image: "Foodpng.png",
      discount1: "20",
      title: "Өглөөний хоол",
      price: "14800",
      discount: "16800",
    },
    {
      image: "Foodpng.png",
      discount1: "20",
      title: "Зайрмаг",
      price: "4000",
      discount: "16800",
    },
    {
      image: "Foodpng.png",
      discount1: "20",
      title: "Өглөөний хоол",
      price: "4000",
      discount: "16800",
    },
    {
      image: "Foodpng.png",
      discount1: "20",
      title: "Breakfast ",
      price: "4000",
      discount: "16800",
    },
  ];
  return (
    <Stack direction="row" gap="24px">
      {CardMap.map((index) => {
        return (
          <Stack>
            <Stack position="relative">
              <img
                style={{
                  width: "282px",
                  height: "186px",
                  borderRadius: "16px",
                  marginBottom: "14px",
                }}
                src={index.image}
              />
              <Typography
                margin="16px"
                bgcolor="#18BA51"
                position="absolute"
                top="0"
                left="180px"
                zIndex={1}
                padding="4px 16px"
                borderRadius="16px"
                borderColor="white"
                fontSize="18px"
                fontWeight="600"
                color="white"
              >
                {index.discount1}%
              </Typography>
            </Stack>
            <Typography fontSize="18px" fontWeight="600">
              {index.title}
            </Typography>
            <Stack direction="row" gap="16px">
              <Typography fontSize="18px" fontWeight="600" color="#18BA51">
                {index.price}₮
              </Typography>
              <Typography
                fontSize="18px"
                fontWeight="400"
                style={{ textDecoration: "line-through" }}
              >
                {index.discount}₮
              </Typography>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
}
