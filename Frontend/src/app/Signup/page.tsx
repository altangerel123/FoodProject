"use client";

import { CustomInput } from "@/component";
import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [name, setName] = useState("");
  const [name1, setName1] = useState("");

  return (
    <Stack alignItems="center">
      <Stack width="448px" gap="48px" alignItems="center" sx={{ p: "32px" }}>
        <Typography fontSize="28px" fontWeight="700">
          Бүртгүүлэх
        </Typography>
        <Stack gap="16px">
          <CustomInput
            placeholder="Нэрээ оруулна уу"
            label="Нэр"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            type="text"
          />
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
            placeholder="Та хаягаа оруулна уу"
            label="Хаяг"
            value={name1}
            onChange={(event) => {
              setName1(event.target.value);
            }}
            type="text"
          />
          <CustomInput
            placeholder="Нууц үгээ оруулна уу"
            label="Нууц үг"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
          />
          <CustomInput
            placeholder="Нууц үгээ оруулна уу"
            label="Нууц үг давтах"
            value={password1}
            onChange={(event) => {
              setPassword1(event.target.value);
            }}
            type="password"
          />
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
  );
}
