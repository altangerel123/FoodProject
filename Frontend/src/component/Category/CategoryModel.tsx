"use client";
import { Button, Stack, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import * as yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../AupthProvider";
import { useFormik } from "formik";
import { CustomInput } from "..";
const validationSchema = yup.object({
  menu: yup.string().required("Хоолны ангилал оруулна уу"),
});
export default function CategoryModel() {
  const { setNewCategory, menupost } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      menu: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      menupost({
        menu: values.menu,
      });
    },
  });
  return (
    <Stack sx={{ width: "587px", p: "16px 24px 16px 24px" }}>
      <Stack direction="row" alignItems="center">
        <ClearIcon
          onClick={() => {
            setNewCategory(false);
          }}
        />
        <Typography
          display="flex"
          width="100%"
          fontSize="24px"
          fontWeight="700"
          justifyContent="center"
        >
          Create new category
        </Typography>
      </Stack>
      <Stack>
        <CustomInput
          placeholder="Category name"
          label="Category name"
          name="menu"
          value={formik.values.menu}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.menu && Boolean(formik.errors.menu)}
          helperText={formik.touched.menu && formik.errors.menu}
        />
      </Stack>
      <Stack direction="row" gap="16px" justifyContent="end">
        <Button
          style={{ fontSize: "16px", fontWeight: "700", color: "black" }}
          onClick={() => {
            setNewCategory(false);
          }}
        >
          Clear
        </Button>
        <Button
          style={{
            fontSize: "16px",
            fontWeight: "700",
            color: "black",
            padding: "10px 8px 10px 8px",
          }}
          disabled={!formik.values.menu}
          onClick={() => {
            formik.handleSubmit();
            setNewCategory(false);
          }}
        >
          Continue
        </Button>
      </Stack>
    </Stack>
  );
}
