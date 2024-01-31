"use client";
import { Stack, Typography } from "@mui/material";
import { LogoWhite } from "../../public/LogoWhite";
import { Facebook } from "../../public/Facebook";
import { Instagram } from "../../public/Instagram";
import { Twitter } from "../../public/Twitter";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();
  return (
    <Stack
      position="relative"
      bgcolor="#18BA51"
      width="full"
      color="white"
      border={1}
      gap="40px"
      sx={{
        width: "full",
        height: "545px",
        backgroundImage: "url(/Food.png)",
        px: "120px",
        paddingTop: "114px",
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        minHeight="fit-content"
      >
        <LogoWhite />
        <Typography fontSize="20px" fontWeight="700">
          Food Delivery
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ px: "120px" }}
      >
        <Link
          href={"/Home"}
          style={{
            color: "white",
            marginLeft: "24px",
            fontSize: "14px",
            fontWeight: "700",
            lineHeight: "16px",
            padding: "16px",
          }}
        >
          НҮҮР
        </Link>
        <Link
          href={"/FoodInfo2"}
          style={{
            color: "white",
            marginLeft: "24px",
            fontSize: "14px",
            fontWeight: "700",
            lineHeight: "16px",
            padding: "16px",
          }}
        >
          Холбоо барих
        </Link>
        <Link
          href={"/Menu"}
          style={{
            color: "white",
            marginLeft: "24px",
            fontSize: "14px",
            fontWeight: "700",
            lineHeight: "16px",
            padding: "16px",
          }}
        >
          Хоолны цэс
        </Link>
        <Link
          href={"/FooterInfo1"}
          style={{
            color: "white",
            marginLeft: "24px",
            fontSize: "14px",
            fontWeight: "700",
            lineHeight: "16px",
            padding: "16px",
          }}
        >
          Үйлчилгээний нөхцөл
        </Link>
        <Link
          href={"/FoodInfo2"}
          style={{
            color: "white",
            marginLeft: "24px",
            fontSize: "14px",
            fontWeight: "700",
            lineHeight: "16px",
            padding: "16px",
          }}
        >
          Хүргэлтийн бүс
        </Link>
        <Link
          href={"/FoodInfo2"}
          style={{
            color: "white",
            marginLeft: "24px",
            fontSize: "14px",
            fontWeight: "700",
            lineHeight: "16px",
            padding: "16px",
          }}
        >
          Нууцлалын бодлого
        </Link>
      </Stack>
      <Stack
        justifyContent="center"
        direction="row"
        gap="18px"
        borderBottom={1}
        sx={{ paddingBottom: "40px" }}
      >
        <Facebook />
        <Instagram />
        <Twitter />
      </Stack>
      <Stack alignItems="center">
        <Typography>© 2024 Pinecone Foods LLC s</Typography>
        <Typography>Зохиогчийн эрх хуулиар хамгаалагдсан.</Typography>
      </Stack>
    </Stack>
  );
};
