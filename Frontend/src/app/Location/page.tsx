"use client";

import { Card, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function Location() {
  return (
    <Stack sx={{ px: "120px" }} gap="30px" my="30px">
      <Stack height="616px" border={1}></Stack>
      <Stack direction="row" alignItems="center">
        <StarIcon sx={{ color: "#18BA51" }} />
        <Typography px="16px" fontSize="22px" fontWeight="700">
          Хүргэлтийн бүс дэх хаягууд
        </Typography>
      </Stack>
      <Stack direction="row" gap="20px">
        <Card style={{ padding: "24px", width: "100%" }}>
          <Typography
            pb="16px"
            borderColor="#18BA51"
            borderBottom={1}
            fontSize="20px"
            fontWeight="590"
          >
            А бүс
          </Typography>
          <Stack direction="row" gap="16px" mt="16px">
            <Stack width="100%" gap="16px">
              <Typography>Нархан хотхон</Typography>
              <Typography>26-р байр</Typography>
              <Typography>26-р байр</Typography>
              <Typography>45-р байр</Typography>
              <Typography>3-р байр</Typography>
              <Typography>Хоймор хотхон </Typography>
              <Typography>Хоймор хотхон </Typography>
            </Stack>
            <Stack width="100%" gap="16px ">
              <Typography>Нархан хотхон</Typography>
              <Typography>26-р байр</Typography>
              <Typography>26-р байр</Typography>
              <Typography>45-р байр</Typography>
              <Typography>3-р байр</Typography>
              <Typography>Хоймор хотхон </Typography>
              <Typography>Хоймор хотхон </Typography>
            </Stack>
          </Stack>
        </Card>
        <Card style={{ padding: "24px", width: "100%" }}>
          <Typography
            pb="16px"
            borderColor="#18BA51"
            borderBottom={1}
            fontSize="20px"
            fontWeight="590"
          >
            Б бүс
          </Typography>
          <Stack direction="row" mt="16px">
            <Stack width="100%" gap="16px">
              <Typography>Нархан хотхон</Typography>
              <Typography>26-р байр</Typography>
              <Typography>26-р байр</Typography>
              <Typography>45-р байр</Typography>
              <Typography>3-р байр</Typography>
              <Typography>Хоймор хотхон </Typography>
              <Typography>Хоймор хотхон </Typography>
            </Stack>
            <Stack width="100%" gap="16px">
              <Typography>Нархан хотхон</Typography>
              <Typography>26-р байр</Typography>
              <Typography>26-р байр</Typography>
              <Typography>45-р байр</Typography>
              <Typography>3-р байр</Typography>
              <Typography>Хоймор хотхон </Typography>
              <Typography>Хоймор хотхон </Typography>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </Stack>
  );
}
