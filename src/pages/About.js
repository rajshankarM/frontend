import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./About.css";

const About = () => {
  return (
    <Card className="about-container"  style={{marginTop: "150px"}}>
        <h2>
          <CardContent>
          {" "}
          <Typography gutterBottom variant="h5" component="div">
          This is Registration Form Using ReactJS, NodeJS, and Express Along with Routing
        </Typography>
          </CardContent>       
        </h2>  
    </Card>
  )
}

export default About