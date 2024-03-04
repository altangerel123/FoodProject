"use client";
import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import Card1 from "./Card1";
export default function CardPart() {
  const Card2map = [
    {
      title: "Өглөөний хоол",
      text: "Бүгдийг харах",
    },
    {
      title: "Зайрмаг",
      text: "Бүгдийг харах",
    },
    {
      title: "Өглөөний хоол",
      text: "Бүгдийг харах",
    },
    {
      title: "Breakfast ",
      text: "Бүгдийг харах",
    },
  ];
  return (
    <Stack px="240px" width="100%" gap="80px">
      {Card2map.map((index, gg) => {
        return (
          <Stack key={gg} gap="24px">
            <Stack direction="row" justifyContent="space-between" py="16px">
              <Stack direction="row" alignItems="center">
                <StarIcon sx={{ color: "#18BA51" }} />
                <Typography fontSize="22px" fontWeight="700">
                   {index.title}
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Typography color="#18BA51">{index.text}</Typography>
                <ArrowForwardIosIcon
                  style={{ fontSize: "14px", color: "#18BA51" }}
                />
              </Stack>
            </Stack>
            <Card1 />
          </Stack>
        );
      })}
    </Stack>
  );
}
