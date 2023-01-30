import * as React from 'react';
import {Box, Card, CardActions} from '@mui/material/';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { flexbox } from '@mui/system';

export default function ProjectCard() {
  return (
    <Card sx={({ maxWidth: 345 }, { background: 'black' })}>
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
