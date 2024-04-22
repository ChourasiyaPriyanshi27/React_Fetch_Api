import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";
import "../components/style.css";
import Grid from "@mui/material/Grid";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const myStyle = {
  backgroundImage: "url('https://picsum.photos/200/300')",
  height: "50vh",
  marginTop: "-70px",
  fontSize: "50px",
  backgroundSize: "cover",
  zIndex: "1px",
};

const Cards = () => {
  const [data, setData] = useState([]);


  const fetchData = () => {
    axios
      .get("https://child.onrender.com/api/sciencefiction")
      .then((res) => setData(res?.data) )
      .catch((error) => console.log(error, "error"));
  };
 
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Box style={myStyle}>
        <h4 style={{ color: "white" }}>Science Fiction Stories</h4>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "0.5rem" }}
          >
            New
          </Button>
          <Button
            variant="contained"
            color="warning"
            style={{ margin: "0.5rem" }}
          >
            In Progress
          </Button>
          <Button
            variant="contained"
            color="success"
            style={{ margin: "0.5rem" }}
          >
            Completed
          </Button>
          <Button variant="contained" color="info" style={{ margin: "0.5rem" }}>
            Clear All
          </Button>
        </Box>

        <Box>
          <Grid
            container
            justifyContent="center"
            spacing={2}
            className="cardStyle"
          >
            {data?.map((item) => (
              <Grid item key={item.id} xs={6} sm={3} md={3}>
                <Card
                  sx={{ maxWidth: 345 }}
                  className="cardColor"
                  style={{
                    marginTop: "2rem",
                    backgroundColor: "rgb(27, 27, 239)",
                    marginBottom: "2rem",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={"https://ik.imagekit.io/dev24/${item?.Image}"}
                      alt="image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {item.Title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      style={{
                        backgroundColor: "white",
                        paddingInlineStart: "8rem",
                        paddingInlineEnd: "8rem",
                        borderRadius: "10rem",
                      }}
                    >
                      New
                    </Button>
                  </CardActions>
                </Card>
                <Link to={`/next/${item.id}`}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: "0.5rem" }}
                  >
                    Next Cards
                  </Button>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};
export default Cards;
