"use cleant";
import { Button, Stack, TextField } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import { AuthContext } from "../AupthProvider";

export default function ImageCard() {
  const { imageUrl, setSelectedFile, selectedFile, handleImageInput } =
    useContext(AuthContext);
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setSelectedFile(event.target.files[0]);
  };
  return (
    <Stack gap="30px">
      <TextField type="file" onChange={handleImageChange} variant="outlined" />
      <Button variant="contained" onClick={handleImageInput}>
        Upload
      </Button>
      {imageUrl && <img width="100%" height="200px" alt="Uploaded" src="" />}
    </Stack>
  );
}
