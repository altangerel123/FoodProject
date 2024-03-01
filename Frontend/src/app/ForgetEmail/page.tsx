"use client";

import { CustomInput } from "@/component";
import { AuthContext } from "@/component/AupthProvider";
import { Button, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import Link from "next/link";
import { Router } from "next/router";
import { useContext, useState } from "react";
import * as yup from "yup";
const validationSchema = yup.object({
  email: yup.string().email().required("Email oruulna uu"),
});
export default function Home() {
  const { signup } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signup;
    },
  });
  return (
    <Stack alignItems="center" my="170px">
      <Stack width="448px" gap="48px" sx={{ p: "32px" }}>
        <Typography fontSize="28px" fontWeight="700">
          Нууц үг сэргээх
        </Typography>
        <Stack gap="48px">
          <CustomInput
            placeholder="Имэйл хаягаа оруулна уу"
            type="email"
            label="Имэйл"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Stack>
            <Button
              fullWidth
              variant="outlined"
              style={{ padding: "16px 8px" }}
              disabled={Boolean(formik.errors.email)}
              onClick={() => {
                formik.handleSubmit();
              }}
            >
              <Link
                href={"/ForgetKod"}
                style={{
                  color: "#18BA51",
                  textDecoration: "none",
                }}
              >
                Үргэлжлүүлэх
              </Link>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
