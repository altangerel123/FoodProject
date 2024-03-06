"use client";

import { CustomInput } from "@/component";
import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import * as yup from "yup";
import Link from "next/link";
import { AuthContext } from "../AupthProvider";
import { useFormik } from "formik";
const validationSchema = yup.object({
  email: yup.string().email("И-мэйл буруу байна").required("Бөглөнө үү"),
  password: yup.string().required(),
});
export default function NewLogin() {
  const router = useRouter();
  const { login, setIsLogin } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      login({
        email: values.email,
        password: values.password,
      });
    },
  });
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
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
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
            <Link
              href={"/ForgetEmail"}
              style={{
                display: "flex",
                justifyContent: "end",
                textDecoration: "none",
              }}
              onClick={() => {
                setIsLogin(false);
              }}
            >
              Нууц үг сэргээх
            </Link>
            <Stack gap="32px">
              <Button
                variant="contained"
                disabled={
                  !formik.values.email ||
                  !formik.values.password ||
                  Boolean(formik.errors.email)
                }
                fullWidth
                sx={{ p: "16px 8px", width: "384px" }}
                onClick={() => {
                  formik.handleSubmit();
                  setIsLogin(false);
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
                  setIsLogin(false);
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
