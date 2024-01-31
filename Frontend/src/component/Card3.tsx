"use client";

import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function Card3() {
  const [open, setOpen] = useState(false);

  return (
    <Stack>
      <Stack direction="row" padding="33px" gap="32px">
        <img style={{width: "500px", height
      : "500px"}} src="Food3.png"></img>
        <Stack gap="32px">
          <Stack>
            <Typography fontSize="28px" fontWeight="700">Main Pizza </Typography>
            <Typography fontSize="18px" fontWeight="600" color="#18BA51">34,800₮</Typography>
          </Stack>
          <Stack>
            <Typography fontSize="18px" fontWeight="18px">Орц</Typography>
            <Typography fontSize="16px" fontWeight="400" color="#767676">
              Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр{" "}
            </Typography>
          </Stack>
          <Typography fontSize="18px" fontWeight="600">Тоо</Typography>
          <Stack direction="row" justifyContent="space-between">
            <Typography display="flex" justifyContent="center" alignItems="center" width="45px" height="40px" bgcolor="#18BA51" color="white">-</Typography>
            <Typography>1</Typography>
            <Typography display="flex" justifyContent="center" alignItems="center" width="45px" height="40px" bgcolor="#18BA51" color="white">+</Typography>
          </Stack>
          <Button  variant="contained" fullWidth sx={{padding: "8px 16px"}}>Сагслах</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
