"use client";

import { CustomInput } from "@/component";
import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function Home(){
  const [email, setEmail] = useState("");

  return (
    <Stack alignItems="center" my="170px">
      <Stack width="448px" gap="48px" alignItems="center" sx={{ p: "32px" }}>
        <Typography fontSize="28px" fontWeight="700">
           Нууц үг сэргээх
        </Typography>
        <Stack gap="48px">
          <CustomInput
            placeholder="Имэйл хаягаа оруулна уу"
            label="Имэйл"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="email"
          />
          <Stack>
            <Button
              variant="contained"
              fullWidth
              sx={{ p: "16px 8px", width: "384px" }}
              disabled={!email}
            >
              Үргэлжлүүлэх
            </Button>
        </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
