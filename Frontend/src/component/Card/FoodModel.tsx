"use client";
import { Stack, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AupthProvider";

export default function FoodModel() {
  const { getCategory, setOpen } = useContext(AuthContext);
  return getCategory.map((item) => {
    return (
      <Stack position="relative">
        <Stack>
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
            src="image 13.png"
          />
          {/* <Typography
            margin="16px"
            bgcolor="#18BA51"
            position="absolute"
            top="10px"
            left="10px"
            padding="4px 16px"
            borderRadius="16px"
            borderColor="white"
            fontSize="18px"
            fontWeight="600"
            color="white"
          >
            {item?.entrance}%
          </Typography> */}
        </Stack>
        <Typography fontSize="18px" fontWeight="600">
          {item?.foodName}
        </Typography>
        <Stack direction="row" gap="16px">
          <Typography fontSize="18px" fontWeight="600" color="#18BA51">
            {item?.entrance}₮
          </Typography>
          <Typography
            fontSize="18px"
            fontWeight="400"
            style={{ textDecoration: "line-through" }}
          >
            {item?.discount}₮
          </Typography>
        </Stack>
      </Stack>
    );
  });
}
