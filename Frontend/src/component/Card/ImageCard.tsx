"use cleant";
import { Button, Stack, TextField } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import { AuthContext } from "../AupthProvider";

export default function ImageCard() {
  const { selectedFile, setSelectedFile, setImageUrl, imageUrl } =
    useContext(AuthContext);
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setSelectedFile(event.target.files[0]);
  };
  const handleImageInput = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dluvjoh6c/upload?upload_preset=iiart9je",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        console.log(data);
        setImageUrl(data.secure_url);
      } catch (error) {
        console.error("Image upload error:", error);
      }
    }
  };
  return (
    <Stack gap="30px">
      <TextField type="file" onChange={handleImageChange} variant="outlined" />
      <Button variant="contained" onClick={handleImageInput}>
        Upload
      </Button>
      {imageUrl && (
        <img
          width="100%"
          height="200px"
          alt="Uploaded"
          src={imageUrl}
          onClick={() => {
            handleImageChange;
          }}
        />
      )}
    </Stack>
  );
}
