import { Button, Stack, TextField } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../AupthProvider";

export default function ImageModel() {
  const { handleImageChange, handleImageInput, setProductModal } =
    useContext(AuthContext);
  return (
    <Stack gap="20px">
      <TextField type="file" onChange={handleImageChange} />
      <Button
        className="bg-black"
        variant="contained"
        onClick={async () => {
          await handleImageInput();
          setProductModal(false);
        }}
      >
        Upload
      </Button>
    </Stack>
  );
}
