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
  kod: yup.string().email().required("Email oruulna uu"),
});
export default function Home() {
  const { signup } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signup;
    },
  });
  return (
    <Stack alignItems="center" my="170px">
      <Stack width="448px" gap="48px" sx={{ p: "32px" }}>
        <Typography
          display="flex"
          justifyContent="center"
          fontSize="28px"
          fontWeight="700"
        >
          Нууц үг зохиох
        </Typography>
        <Stack gap="48px">
          <CustomInput
            placeholder="Нууц үг"
            type="password"
            label="Нууц үг"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
            <CustomInput
            placeholder="Нууц үг"
            type="password"
            label="Нууц үг давтах"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Stack>
            <Button
              fullWidth
              variant="outlined"
              style={{ padding: "16px 8px" }}
            >
              <Link
                href={"/PorgetPass"}
                style={{
                  color: "#18BA51",
                  display: "flex",
                  alignItems: "center",
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
