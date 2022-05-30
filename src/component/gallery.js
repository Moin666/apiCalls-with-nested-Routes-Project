import React, { useEffect, useState } from "react";
import MediaCard from "../common/mediaCard";
import Grid from "@mui/material/Grid";
import axios from "axios";

function Gallery(props) {
  const [data, setData] = useState([]);

  const apiUrl = "https://jsonplaceholder.typicode.com/photos";
  const apiCall = async () => {
    const { data } = await axios.get(apiUrl);
    let newData = data.slice(0,10)
    
    setData(newData);
  };
  useEffect(() => {
    apiCall();
  }, []);

  console.log(data)
  return (
    <div>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item xs={6} sm={6} md={6} lg={3} xl={3} align="center">
            <MediaCard urlImg={item.thumbnailUrl} title = {item.title} id = {item.id}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Gallery;
