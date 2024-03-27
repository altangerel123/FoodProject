"use Client";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Modal,
  Select,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import * as yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../AupthProvider";
import { CustomInput } from "..";
import { useFormik } from "formik";
import ImageCard from "./ImageCard";
const validationSchema = yup.object({
  foodName: yup.string().required("Хоолны нэр оруулна уу"),
  entrance: yup.string().required("Хоолны орц оруулна уу"),
  price: yup.number().required("Хоолны үнэ оруулна уу"),
  discount: yup.number(),
});
export default function NewfoodCard() {
  const {
    setNewFood,
    foodpost,
    setIsCard,
    imageModel,
    setImageModel,
    refreshMenu,
  } = useContext(AuthContext);
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const formik = useFormik({
    initialValues: {
      foodName: "",
      entrance: "",
      price: 0,
      discount: 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      foodpost({
        foodName: values.foodName,
        entrance: values.entrance,
        price: values.price,
        discount: values.discount,
      });
      refreshMenu();
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
            <Select>
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
            type="text"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
        </Stack>
        <Stack gap="16px">
          <Typography>
            <Switch {...label} defaultChecked />
            Хямдралтай эсэх
          </Typography>
          <CustomInput
            placeholder="Хямдралтай эсэх"
            type="text"
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
          <Stack
            width="284px"
            height="122px"
            bgcolor="#D6D7DC"
            justifyContent="center"
            alignItems="center"
            border="dashed 1px #393939 "
            position="relative"
          >
            <Stack alignItems="center">
              <Typography>Add image for the food</Typography>
              <Button
                style={{
                  width: "114px",
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "white",
                  backgroundColor: "#393939",
                  padding: "10px 8px 10px 8px",
                }}
                onClick={() => {
                  setImageModel(true);
                }}
              >
                Add image
              </Button>
            </Stack>
            {/* {imageUrl && (
              <img
                width="100%"
                height="100%"
                style={{ position: "absolute", top: "0", left: "0" }}
                src=""
              />
            )} */}
            <Modal open={imageModel}>
              <Box
                sx={{
                  position: "absolute" as "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  bgcolor: "background.paper",
                  border: "2px solid #000",
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <Typography
                  display="flex"
                  justifyContent="end"
                  onClick={() => {
                    setImageModel(false);
                  }}
                >
                  X
                </Typography>
                {imageModel && <ImageCard />}
              </Box>
            </Modal>
          </Stack>
        </Stack>
        <Stack direction="row" gap="16px" justifyContent="end">
          <Button
            style={{ fontSize: "16px", fontWeight: "700", color: "black" }}
            onClick={() => {
              setNewFood(false);
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
            disabled={
              !formik.values.foodName ||
              !formik.values.entrance ||
              !formik.values.price ||
              !formik.values.discount
            }
            onClick={() => {
              formik.handleSubmit();
              console.log(formik.errors);
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
