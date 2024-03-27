"use client";
import { Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../AupthProvider";

export default function FoodModel() {
  const { getCategory, setOpen } = useContext(AuthContext);
  return (
    <Stack direction="row">
      <Grid container gap="50px">
        {getCategory.map((item, key) => {
          return (
            <Stack key={key}>
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
                  src="image 13.png"
                />
                <Typography
                  margin="16px"
                  bgcolor="#18BA51"
                  position="absolute"
                  top="5px"
                  right="5px"
                  padding="4px 16px"
                  borderRadius="16px"
                  borderColor="white"
                  fontSize="18px"
                  fontWeight="600"
                  color="white"
                >
                  {item.price}%
                </Typography>
              </Stack>
              <Typography fontSize="18px" fontWeight="600">
                {item.foodName}
              </Typography>
              <Stack direction="row" gap="16px">
                <Typography fontSize="18px" fontWeight="600" color="#18BA51">
                  {item.entrance}₮
                </Typography>
                <Typography
                  fontSize="18px"
                  fontWeight="400"
                  style={{ textDecoration: "line-through" }}
                >
                  {item.discount}₮
                </Typography>
              </Stack>
            </Stack>
          );
        })}
      </Grid>
    </Stack>
  );
}
