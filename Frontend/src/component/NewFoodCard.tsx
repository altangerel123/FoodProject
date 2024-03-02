"use Client";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import * as yup from "yup";
import { useContext } from "react";
import { AuthContext } from "./AupthProvider";
import { CustomInput } from ".";
import { useFormik } from "formik";
const validationSchema = yup.object({
  foodName: yup.string().required("Хоолны нэр оруулна уу"),
  menu: yup.string().required("Хоолны ангилал оруулна уу"),
  entrance: yup.string().required("Хоолны орц оруулна уу"),
  price: yup.string().required("Хоолны үнэ оруулна уу"),
  discount: yup.string(),
});

export default function NewfoodCard() {
  const { setNewFood, category, setIsCard } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      foodName: "",
      menu: "",
      entrance: "",
      price: "",
      discount: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      category({
        foodName: values.foodName,
        menu: values.menu,
        entrance: values.entrance,
        price: values.price,
        discount: values.price,
      });
    },
  });
  console.log(formik.errors);
  return (
    <Stack sx={{ width: "587px", p: "16px 24px 16px 24px" }}>
      <Stack direction="row" alignItems="center" borderBottom={1}>
        <ClearIcon
          onClick={() => {
            setNewFood(false);
          }}
        />
        <Typography
          display="flex"
          width="100%"
          fontSize="24px"
          fontWeight="700"
          justifyContent="center"
          py="24px"
        >
          Create food
        </Typography>
      </Stack>
      <Stack>
        <Stack gap="16px">
          <Typography>Хоолны нэр</Typography>
          <CustomInput
            placeholder="Хоолны нэр"
            // label="Хоолны нэр"
            name="foodName"
            value={formik.values.foodName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.foodName && Boolean(formik.errors.foodName)}
            helperText={formik.touched.foodName && formik.errors.foodName}
          />
        </Stack>
        <Stack gap="16px">
          <Typography>Хоолны ангилал</Typography>
          <FormControl fullWidth sx={{ bgcolor: "#ECEDF0" }}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              name="menu"
              value={formik.values.menu}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.menu && Boolean(formik.errors.menu)}
            >
              <MenuItem value="Breakfast">Breakfast</MenuItem>
              <MenuItem value="Soup">Soup</MenuItem>
              <MenuItem value="Main course">Main course</MenuItem>
              <MenuItem value="Desserts">Desserts</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack gap="16px">
          <Typography>Хоолны орц</Typography>
          <CustomInput
            placeholder="Хоолны орц"
            // label="Хоолны нэр"
            name="entrance"
            value={formik.values.entrance}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.entrance && Boolean(formik.errors.entrance)}
            helperText={formik.touched.entrance && formik.errors.entrance}
          />
        </Stack>
        <Stack gap="16px">
          <Typography>Хоолны үнэ</Typography>
          <CustomInput
            placeholder="Хоолны үнэ"
            label="Хоолны нэр"
            type="Number"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
        </Stack>
        <Stack gap="16px">
          <Typography>Хямдралтай эсэх</Typography>
          <CustomInput
            placeholder="Хямдралтай эсэх"
            // label="Хоолны нэр"
            type="Number"
            name="discount"
            value={formik.values.discount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.discount && Boolean(formik.errors.discount)}
            helperText={formik.touched.discount && formik.errors.discount}
          />
        </Stack>
        <Stack gap="16px">
          <Typography>Хоолны зураг</Typography>
          <img width="284px" height="122px" src="" alt="" />
        </Stack>
        <Stack direction="row" gap="16px" justifyContent="end">
          <Button
            style={{ fontSize: "16px", fontWeight: "700", color: "black" }}
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
            disabled={
              !formik.values.foodName ||
              !formik.values.menu ||
              !formik.values.entrance ||
              !formik.values.price ||
              !formik.values.discount
            }
            onClick={() => {
              formik.handleSubmit();
              setIsCard(true);
              setNewFood(false);
            }}
          >
            Continue
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
