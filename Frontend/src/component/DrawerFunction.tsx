"use client";
import { Button, Card, Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Card3 from "./Card/FoodModel";
import { useContext } from "react";
import { AuthContext } from "./AupthProvider";

export default function DrawerFunction() {
  const { setDrawer } = useContext(AuthContext);
  return (
    <Stack>
      <Stack sx={{ p: "24px 26px" }}>
        <Stack direction="row" gap="117px" alignItems="center">
          <ArrowBackIosIcon
            style={{ fontSize: "40px", padding: "6px" }}
            onClick={() => {
              setDrawer(false);
            }}
          />
          <Typography fontSize="20px" fontWeight="900">
            Таны сагс
          </Typography>
        </Stack>
        <Card3 />
      </Stack>
      <Card
        sx={{
          gap: "10px",
          display: "flex",
          padding: "10px 32px",
          alignItems: "end",
          justifyContent: "space-between",
        }}
      >
        <Stack width="100%">
          <Typography fontSize="18px" fontWeight="400">
            Нийт төлөх дүн
          </Typography>
          <Typography fontSize="18px" fontWeight="700">
            34,800₮
          </Typography>
        </Stack>
        <Button fullWidth variant="contained">
          Захиалах
        </Button>
      </Card>
    </Stack>
  );
}
