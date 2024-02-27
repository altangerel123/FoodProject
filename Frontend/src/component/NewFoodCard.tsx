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
import { useContext } from "react";
import { AuthContext } from "./AupthProvider";
import { CustomInput } from ".";

export default function NewfoodCard() {
  const { setNewFood } = useContext(AuthContext);
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
          <CustomInput placeholder="Хоолны нэр" />
        </Stack>
        <Stack gap="16px">
          <Typography>Хоолны ангилал</Typography>
          <FormControl fullWidth sx={{ bgcolor: "#ECEDF0" }}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={10}>Breakfast</MenuItem>
              <MenuItem value={20}>Soup</MenuItem>
              <MenuItem value={30}>Main course</MenuItem>
              <MenuItem value={40}>Desserts</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack gap="16px">
          <Typography>Хоолны орц</Typography>
          <CustomInput placeholder="Хоолны орц" />
        </Stack>
        <Stack gap="16px">
          <Typography>Хоолны үнэ</Typography>
          <CustomInput placeholder="Хоолны үнэ" />
        </Stack>
        <Stack gap="16px">
          <Typography>Хямдралтай эсэх</Typography>
          <CustomInput placeholder="Хямдралтай эсэх" />
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
          >
            Continue
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
