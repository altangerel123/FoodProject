"use client";

import { Box, Modal, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "./AupthProvider";
import Card3 from "./FoodModel";
export default function Card1() {
  const { open, setOpen } = useContext(AuthContext);
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
    <Stack
      width="100%"
      direction="row"
      gap="24px"
      justifyContent="space-between"
    >
      {CardMap.map((index, card) => {
        return (
          <Stack key={card}>
            <Stack position="relative">
              <img
                style={{
                  width: "350px",
                  height: "200px",
                  borderRadius: "16px",
                  marginBottom: "14px",
                }}
                onClick={() => {
                  setOpen(true);
                }}
                src={index.image}
              />
              <Typography
                margin="16px"
                bgcolor="#18BA51"
                position="absolute"
                top="10px"
                right="10px"
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
          {open && <Card3 />}
        </Box>
      </Modal>
    </Stack>
  );
}
