import { Button, Container, Stack, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";

const Page = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setSelectedFile(event.target.files[0]);
  };

  const handleImageInput = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);
        const response = await fetch("", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        console.log(data);
        setImageUrl(data.secure_url);
      } catch (error) {
        console.error("Image upload error:", error);
      }
    }
  };
  return (
    <Stack>
      <Container>
        <Stack py={8} alignItems="center">
          <Stack gap={3} width="400">
            <TextField
              type="file"
              onChange={handleImageChange}
              variant="outlined"
            />
            <Button onClick={handleImageInput} variant="contained">
              Uplaud
            </Button>
            {/* {imageUrl && (
                <Stack>
                    <Image src={imageUrl} alt="Uploaded" fill/>
                <Stack/>
            )} */}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
