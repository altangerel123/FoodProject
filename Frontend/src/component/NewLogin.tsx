"use client";

import { CustomInput } from "@/component";
import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function NewLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Stack
      sx={{ bgcolor: "text.secondary" }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack bgcolor="white">
        <Stack width="448px" gap="48px" alignItems="center" sx={{ p: "32px" }}>
          <Typography fontSize="28px" fontWeight="700">
            Нэвтрэх
          </Typography>
          <Stack gap="16px">
            <CustomInput
              placeholder="Имэйл хаягаа оруулна уу"
              label="Имэйл"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              type="email"
            />
            <CustomInput
              placeholder="Нууц үг"
              label="Нууц үг"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              type="password"
            />
            <Link
              href={"/ForgetPass"}
              style={{
                display: "flex",
                justifyContent: "end",
                textDecoration: "none",
              }}
            >
              Нууц үг сэргээх
            </Link>
            <Stack gap="32px">
              <Button
                variant="contained"
                fullWidth
                sx={{ p: "16px 8px", width: "384px" }}
                disabled={!email || !password}
              >
                Нэвтрэх
              </Button>
              <Typography display="flex" justifyContent="center">
                Эсвэл
              </Typography>
              <Button
                fullWidth
                variant="outlined"
                sx={{ p: "16px 8px" }}
                onClick={() => {
                  router.push("/Signup");
                }}
              >
                Бүртгүүлэх
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
