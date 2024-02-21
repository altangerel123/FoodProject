"use client";

import { Stack } from "@mui/material";
import Homepage from "./Home/page";

export default function Home() {
  return (
    <Stack position="relative">
      <Stack position="relative">
        <Homepage />
      </Stack>
    </Stack>
  );
}
