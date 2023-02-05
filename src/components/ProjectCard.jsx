import * as React from 'react';
import {
  Border,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from '@mui/material/';

export default function ProjectCard() {
  return (
    <Card
      // variant='outlined'
      style={{ border: "1px solid white"}}
      sx={({ maxWidth: 345 }, { background: 'black' })}
    >
      <CardMedia
        sx={{ height: 50 }}
        image='/static/images/cards/contemplative-reptile.jpg'
        title='green iguana'
      />
      <CardContent>
        <Typography
          gutterBottom
          variant='h6'
          component='div'
          color='white'
          align='center'
        >
          Lizard
        </Typography>
        <Typography variant='body2' color='white' align='center'>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
}