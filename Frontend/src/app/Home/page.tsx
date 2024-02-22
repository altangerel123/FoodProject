"use client";

import { Container, Grid, Stack, Typography } from "@mui/material";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import RiceBowlOutlinedIcon from "@mui/icons-material/RiceBowlOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import Card2 from "@/component/Card2";
import Card1 from "@/component/Card1";

export default function Homepage() {
  const Cards = [
    {
      icons: (
        <ImportContactsOutlinedIcon
          style={{
            color: "#18BA51",
            width: "30px",
            height: "30px",
            margin: "15px",
          }}
        />
      ),
      title: "Хүргэлтийн төлөв хянах",
      text: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icons: (
        <AccessTimeOutlinedIcon
          style={{
            color: "#18BA51",
            width: "30px",
            height: "30px",
            margin: "15px",
          }}
        />
      ),
      title: "Шуурхай хүргэлт",
      text: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icons: (
        <RiceBowlOutlinedIcon
          style={{
            color: "#18BA51",
            width: "30px",
            height: "30px",
            margin: "15px",
          }}
        />
      ),
      title: "Эрүүл, баталгаат орц",
      text: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icons: (
        <ImportContactsOutlinedIcon
          style={{
            color: "#18BA51",
            width: "30px",
            height: "30px",
            margin: "15px",
          }}
        />
      ),
      title: "Хоолны өргөн сонголт",
      text: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ];
  return (
    <Stack>
      <Stack
        height="788px"
        bgcolor="#18BA51"
        width="full"
        color="white"
        sx={{ backgroundImage: "url(/Food.png)", px: "240px" }}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack maxWidth="384px">
          <Typography
            fontSize="55px"
            fontWeight="600"
            paddingBottom="23px"
            borderBottom={1}
          >
            Pinecone Food deliverys
          </Typography>
          <Typography fontSize="22px" fontWeight="700" paddingTop="23px">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Stack>
        <Stack position="relative" marginRight="127px">
          <img
            src="image 13.png"
            style={{ width: "443px", height: "438" }}
            alt=""
          />
          <img
            src="image 14.png"
            style={{
              width: "313px",
              height: "313px",
              position: "absolute",
              top: "113px",
              left: "275px",
            }}
          ></img>
        </Stack>
      </Stack>
      <Stack justifyContent="center">
        <Stack
          direction="row"
          gap="47px"
          px="240px"
          justifyContent="space-between"
          paddingY="150px"
        >
          {Cards.map((index, item) => {
            return (
              <Stack
                key={item}
                padding="16px"
                border={1}
                borderRadius="16px"
                borderColor="#D6D8DB"
              >
                <Typography sx={{ color: "green" }}>{index.icons}</Typography>
                <Typography fontSize="18px" fontWeight="700">
                  {index.title}
                </Typography>
                <Typography fontSize="14px" fontWeight="400">
                  {index.text}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
        <Stack px="240px" gap="80px" alignItems="center">
          <Stack gap="24px">
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" alignItems="center">
                <StarIcon sx={{ color: "#18BA51" }} />
                <Typography fontSize="22px" fontWeight="700">
                   Хямдралтай
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Typography color="#18BA51">Бүгдийг харах</Typography>
                <ArrowForwardIosIcon
                  style={{ fontSize: "14px", color: "#18BA51" }}
                />
              </Stack>
            </Stack>
            <Card1 />
          </Stack>
          <Stack gap="24px">
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" alignItems="center">
                <StarIcon sx={{ color: "#18BA51" }} />
                <Typography fontSize="22px" fontWeight="700">
                  Үндсэн хоол
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Typography color="#18BA51">Бүгдийг харах</Typography>
                <ArrowForwardIosIcon
                  style={{ fontSize: "14px", color: "#18BA51" }}
                />
              </Stack>
            </Stack>
            <Card2 />
          </Stack>
          <Stack gap="24px">
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" alignItems="center">
                <StarIcon sx={{ color: "#18BA51" }} />
                <Typography fontSize="22px" fontWeight="700">
                  Салад ба зууш
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Typography color="#18BA51">Бүгдийг харах</Typography>
                <ArrowForwardIosIcon
                  style={{ fontSize: "14px", color: "#18BA51" }}
                />
              </Stack>
            </Stack>
            <Card2 />
          </Stack>
          <Stack gap="24px">
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" alignItems="center">
                <StarIcon sx={{ color: "#18BA51" }} />
                <Typography fontSize="22px" fontWeight="700">
                  Амттан
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Typography color="#18BA51">Бүгдийг харах</Typography>
                <ArrowForwardIosIcon
                  style={{ fontSize: "14px", color: "#18BA51" }}
                />
              </Stack>
            </Stack>
            <Card2 />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
