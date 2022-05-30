import React from "react";
import { Typography, Grid, TextField, Stack } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useState,useEffect } from "react";
import Pagination from "../utils/paginatoin";
import _ from 'lodash'

import apiServices from "../confiq/apiCalls"

function Todo(props) {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos'

    const [data, setData] = useState([])
    const [currentdata,setCurrentData] = useState([])
    const [pageSize, setPageSize] = useState(15)
    const [currentPagenumber, setCurrentPagenumber] = useState(1)

    const dataCall = async () =>{
        let {data} = await axios.get(apiUrl)
        setData(data)
        displayData(pageSize,data,currentPagenumber)
      }
      
      useEffect(()=> {
    
        dataCall()
        console.log("i run")
      },[])
   const count = data.length;

  const displayData = (pageSize,data,pageNumber) =>{
    // const startIndex = (pageNumber -2)* pageSize;
    const startIndex = (pageNumber -1)* pageSize;
    const arr = _(data).slice(startIndex).take(pageSize).value();
    setCurrentData(arr)  
    setCurrentPagenumber(pageNumber)
  }  

  return (
    <div>
      <Grid container>
        <Grid sx={{ margin: "auto" }} item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Stack spacing={2}>
            <Box sx={{ border: "1px solid ",borderRadius:"5px" }}>
          <Box padding={2}>
                <Typography>Add A Task</Typography>
              </Box>
              <Divider />
              <Box padding={2}>
                <Stack spacing={2}>
                  <Typography variant="h6">Add A Task</Typography>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                  <Typography variant="body1">
                    Enter what you want to submits
                  </Typography>
                  <Button variant="contained" sx={{ width: "15%" }}>
                    Submit
                  </Button>
                </Stack>
                <Box>{/* <Button variant ="contained" >submit</Button> */}</Box>
              </Box>
            </Box>
    
            <Box>
              <Box padding={2} sx={{ border: "1px solid ", borderRadius:"5px" }}>
                <Typography variant='h5'>Add A Task</Typography>
                <Divider />
                <TableContainer >
                  <Table sx={{ minWidth: 300 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center"> <Typography variant="h5">ID#</Typography> </TableCell>
                        <TableCell align="center"> <Typography variant="h5">Status</Typography> </TableCell>
                        <TableCell align="center"> <Typography variant="h5">Actoin</Typography> </TableCell>                
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {currentdata.map((row) => (
                        <TableRow
                          key={row.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell align="center" component="th" scope="row">
                            {row.id}
                          </TableCell>
                          <TableCell align="center">{row.title}</TableCell>
                          <TableCell align="center">
                            <Stack spacing={1} direction ='row'>
                            <Button variant="contained"  sx={{ width: "40%",border:"1px" }}>Complete</Button><Button variant="contained" sx={{backgroundColor:"red",width: "40%"}}>Delete</Button>
                            </Stack>
                            </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
            <Box sx={{margin:"auto"}}>
            <Pagination  pageSize = {pageSize}  count ={data} displayData = {displayData} currentPagenumber= {currentPagenumber} />   
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default Todo;
