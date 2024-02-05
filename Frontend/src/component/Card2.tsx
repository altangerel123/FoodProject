"use client";
import { Box, Modal, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Card3 from "./Card3";
export default function Card2() {
  const [open, setOpen] = useState(false);
  const Card2map = [
    {
      image: "Foodpng.png",
      title: "Өглөөний хоол",
      price: "14800",
    },
    {
      image: "Foodpng.png",
      title: "Зайрмаг",
      price: "4000",
    },
    {
      image: "Foodpng.png",
      title: "Өглөөний хоол",
      price: "4000",
    },
    {
      image: "Foodpng.png",
      title: "Breakfast ",
      price: "4000",
    },
  ];
  return (
    <Stack direction="row" gap="24px">
      {Card2map.map((index) => {
        return (
          <Stack>
            <img
              style={{
                width: "282px",
                height: "186px",
                borderRadius: "16px",
                marginBottom: "14px",
              }}
              onClick={() => {
                setOpen(true);
              }}
              src={index.image}
            />
            <Typography fontSize="18px" fontWeight="600">
              {index.title}
            </Typography>
            <Stack direction="row" gap="16px">
              <Typography fontSize="18px" fontWeight="600" color="#18BA51">
                {index.price}₮
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
