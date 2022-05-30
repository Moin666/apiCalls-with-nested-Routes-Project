import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Stack, Typography } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";

export default function SimplePaper() {
  return (
    <Stack direction="row" spacing={3} justifyContent="space-around">
      {["1", "2", "3"].map((item) => (
        <Paper key={item} elevation={3} sx={{ width: "30%", height:"20vh", padding: "5px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width:"100%",
              height:"100%"
            }}
          >
            <Box>
              <PaidIcon sx={{ fontSize: "40px" }} />
            </Box>
            <Box>
              <Typography variant="caption">total Earning</Typography>
              <Typography variant="h5">$22K</Typography>
              <Typography variant="caption">-10.80%</Typography>
            </Box>
          </Box>
        </Paper>
      ))}
    </Stack>
  );
}
