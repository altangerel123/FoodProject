"use client";

import { CustomInput } from "@/component";
import { Button, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import CloudIcon from "@mui/icons-material/Cloud";
import { useFormik } from "formik";
import * as yup from "yup";
import { AuthContext } from "@/component/AupthProvider";
const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});
export default function Signup() {
  const [name1, setName1] = useState("");
  const [iconColor, setIconColor] = useState(false);
  const { signup } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signup({
        name: values.name,
        email: values.email,
        password: values.password,
      });
    },
  });
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
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
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
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <CustomInput
            placeholder="Нууц үгээ оруулна уу"
            label="Нууц үг давтах"
            name="password1"
          />
          <Stack gap="32px">
            <Stack direction="row" justifyContent="center">
              <CloudIcon
                sx={{ color: !iconColor ? "black" : "green" }}
                onClick={() => {
                  setIconColor(!iconColor);
                }}
              />
              Үйлчилгээний нөхцөл зөвшөөрөх
            </Stack>
            <Button
              fullWidth
              variant="contained"
              disabled={!iconColor}
              sx={{ p: "16px 8px", width: "384px" }}
              onClick={() => {
                formik.handleSubmit();
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
