import React from "react";
import Setting from "../component/setting";
import Messages from "../component/message";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Grid,
  Stack,
  Typography,
  Divider,
  Drawer,
  Avatar,
  Paper,
} from "@mui/material";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { useLocation, useNavigate } from "react-router-dom";
import SearchAppBar from "../common/appBar";


import adjustPaper from "../common/adjustPaperfiile";
import SimplePaper from "../common/paper";


function DashboardPart(props) {
    const { state } = useLocation();

    // const navigate = useNavigate();
  
    // const navigatedynamically = () => {
    //   navigate("messages", { state: { name: "abc" } });
    // };
  return (
    <Grid item xs={12} sm={12} lg={12} xl={12}  padding={1}>
      <Box >
        <Grid container>
          <Grid item xs={12} sx={{margin:"auto"}} sm={12} lg={6} xl={8}>
            <Stack spacing={3}>
              <SearchAppBar />
              <Stack direction="row" spacing={3} padding={1}>
                <Avatar
                  alt="Travis Howard"
                  src="https://mui.com/static/images/avatar/1.jpg"
                />
                <Box>
                  <Typography variant="h5">Hello, Mr {state.email} </Typography>
                  <Typography variant="body1">
                    Check your activities in the dashboard{" "}
                  </Typography>
                </Box>
              </Stack>

              <SimplePaper />

              <Box>
                <Paper sx={{ width: "97%", margin: "auto" }}>
                  <img
                    style={{ width: "100%" }}
                    src="https://image.shutterstock.com/image-photo/diagrams-projecting-tablet-600w-1276620463.jpg"
                  />
                </Paper>
              </Box>

              <Box>
                <Paper sx={{ width: "97%", height: "14vh", margin: "auto" }}>
                  fsdf
                </Paper>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={0} sm={0} lg={4} xl={4} padding={1} sx={{display:{xs:"none",md:"block"}}}>
            <Stack spacing={5}>
              <SimplePaper />
              <SimplePaper />
              <SimplePaper />
              <SimplePaper />
              <SimplePaper />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

export default DashboardPart;
