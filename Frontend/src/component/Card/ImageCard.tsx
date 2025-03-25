"use cleant";
import { Button, Stack, TextField } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../AupthProvider";
export default function ImageCard() {
  const { handleImageInputFood, handleImageChangeFood, setImageModel } =
    useContext(AuthContext);

  return (
    <Stack gap="30px">
      <TextField
        type="file"
        onChange={handleImageChangeFood}
        variant="outlined"
      />
      <Button
        variant="contained"
        onClick={() => {
          handleImageInputFood(), setImageModel(false);
        }}
      >
        Upload
      </Button>
    </Stack>
  );
}
