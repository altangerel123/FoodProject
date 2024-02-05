"use client";

import { CustomInput } from "@/component";
import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
export default function Login() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Stack alignItems="center">
      <Stack width="448px" gap="48px" alignItems="center" sx={{ p: "32px" }}>
        <Typography fontSize="28px" fontWeight="700">
          Нэвтрэх
        </Typography>
        <Stack gap="16px">
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
          <CustomInput
            placeholder="Нууц үг"
            label="Нууц үг"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Link
            href={"/ForgetPass"}
            style={{
              display: "flex",
              justifyContent: "end",
              textDecoration: "none",
              color: "black",
            }}
          >
            Нууц үг сэргээх
          </Link>
          <Stack gap="32px">
            <Button
              variant="contained"
              fullWidth
              sx={{ p: "16px 8px", width: "384px" }}
              onClick={() => {
                formik.handleSubmit();
              }}
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
