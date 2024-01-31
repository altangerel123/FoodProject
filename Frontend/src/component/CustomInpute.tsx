"use client";

import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export const CustomInput = (props: TextFieldProps) => {
  const { label, type = "text", ...rest } = props;
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <Stack>
      <Typography fontSize="14px" fontWeight="400">
        {label}
      </Typography>
      <TextField
        {...rest}
        type={type === "email" && showPassword ? "text" : type}
        sx={{
          bgcolor: "#ECEDF0",
        }}
        InputProps={{
          endAdornment: type === "password" && (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          ),
          startAdornment: type === "search" && (
            <InputAdornment position="start">
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
        inputProps={{
          style: {
            padding: type === "search" ? "2px 8px" : "14px 6px",
            height: "40px",
          },
        }}
      />
    </Stack>
  );
};
