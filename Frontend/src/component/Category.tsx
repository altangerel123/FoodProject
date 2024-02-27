"use client";
import { Button, Stack, TextField, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useContext } from "react";
import { AuthContext } from "./AupthProvider";
export default function Category() {
  const { setNewCategory } = useContext(AuthContext);
  return (
    <Stack>
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
          <Typography>Category name</Typography>
          <TextField placeholder="Placeholder" type="text" />
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
