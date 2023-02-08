import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material/';
import project01Img from '../projects/odinLandingPage/projectImages/project01Preview.png';

export default function ProjectCard({
  image,
  imageAlt,
  title,
  name,
  description,
  url,
}) {
  return (
    <Card
      style={{ border: '1px solid white' }}
      sx={({ maxWidth: 345 }, { background: 'black' })}
    >
      <CardMedia sx={{ height: '100%', objectFit: 'contain'}} component='img' image={project01Img} title={imageAlt} />
      <CardContent>
        <Typography
          gutterBottom
          variant='h6'
          component='div'
          color='white'
          align='center'
        >
          {name}
        </Typography>
        <Typography variant='body2' color='white' align='center'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={url} target='_blank' size='small'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
