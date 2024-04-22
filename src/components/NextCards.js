import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Box, Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Button } from "@mui/material";
import {  CardActions } from "@mui/material";

const NextCards = () => {
  const { id } = useParams();
  const [nextData, setNextData] = useState(null);

  const fetchNextData = async () => {
    try {
      const response = await axios.get(`https://child.onrender.com/api/sciencefiction/${id}`);
      setNextData(response.data);
    } catch (error) {
      console.error('Error fetching next data:', error.message);
      
    }
  };
  

  useEffect(() => {
    fetchNextData();
  }, [id]);

  return (
    <Box>
      <h1>Next Cards Page</h1>
      {!nextData ? (
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={6} sm={3} md={3}>
            <Card sx={{ maxWidth: 345 }} style={{ marginTop: "2rem", backgroundColor: "rgb(27, 27, 239)", marginBottom: "2rem" }}>
              <CardActionArea>
                <CardMedia component="img" height="140" image="https://picsum.photos/200/300" alt="image" />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Title
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" style={{ backgroundColor: "white", paddingInlineStart: "8rem", paddingInlineEnd: "8rem", borderRadius: "10rem" }}>
                  New
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <p>Loading...</p>
      )}
    </Box>
  );
};

export default NextCards;
