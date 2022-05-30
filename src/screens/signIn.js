import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Box, Stack, Typography, TextField, Button, Grid } from "@mui/material";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";





function SignIN(props) {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
   
     const navigate = useNavigate();


    const sendLoginData = () =>{
        const obj ={
            email,
            password
        }
        console.log(obj)

        navigate("/dashboard", { state: obj });
        // navigate("/dashboard",{state:obj})
        // navigateR("/dashboard")
    }


  return (
    <div>
      <Grid container>
        <Grid xs={12} sm={12} md={12} lg={12} xl={4} sx={{margin:"auto"}} >
          <Box
            width="100%"
            padding={4}
            sx={{ border: "1px solid", margin: "auto", marginTop: "150px",borderRadius:"5%"  }}
          >
            <Stack spacing={2}>
              <Box  sx={{ margin:"auto",border:"1px solid",width:"40px",height:"40px" ,borderRadius:"50%",backgroundColor:"#0262DE" }}>
                <KeyboardCommandKeyIcon sx={{width:"100%",marginTop:"7px",color:"white"}} />
              </Box>
              <Box>
                <Typography variant="h5" align="center">
                  Dashboard Kit
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" align="left" sx={{marginLeft:"15px"}}>
                  Login In to Dashboard Kit
                </Typography>
                <Typography variant="subtitle1" sx={{marginLeft:"15px"}} align="left">
                  Enter your Email and Password Below
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <TextField sx={{width:"100%"}} label="Email" color="secondary" focused  value={email}  onChange={(e) => {setEmail(e.target.value)}} />
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <TextField sx={{width:"100%"}} label="Password" color="secondary" focused value={password}  onChange={(e) => {setPassword(e.target.value)}} />
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Button  sx={{width:"100%"}} variant="contained" onClick={sendLoginData} >Login</Button>
              </Box>
              <Typography variant="subtitle1"  component='a' align="center">
                        Donot have an account ? Sign UP
                </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignIN;
