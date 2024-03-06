import { Button, Stack, Typography } from "@mui/material";

export default function Search (){
    return(
        <Stack width="100%" direction="row" px="240px">
           <Stack width="100%">
            <Button style={{borderRadius:"10px",maxWidth:"200px",padding:"10px",border: "1px",display: "flex", justifyContent: "start" }}>Хайлт/</Button>
            <Stack width="100%" alignItems="center" py="150px">
                <img style={{width: "133px", height: "133px"}} src="Screenshot.png"/>
                <Typography fontSize="14px" fontWeight="400">Уучлаарай илэрц олдсонгүй...</Typography>
            </Stack>
           </Stack>
        </Stack>
    )
}