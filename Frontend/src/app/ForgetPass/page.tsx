"use client";

import { CustomInput } from "@/component";
import { AuthContext } from "@/component/AupthProvider";
import { Button, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as yup from "yup";
const validationSchema = yup.object({
  email: yup.string().email().required("Email oruulna uu"),
});
export default function Home() {
  const [email, setEmail] = useState("");
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
      <Stack width="448px" gap="48px" alignItems="center" sx={{ p: "32px" }}>
        <Typography fontSize="28px" fontWeight="700">
          Нууц үг сэргээх
        </Typography>
        <Stack gap="48px">
          <CustomInput
            placeholder="Имэйл хаягаа оруулна уу"
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
}
