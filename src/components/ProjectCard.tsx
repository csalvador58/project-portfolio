import { FC } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material/';

interface ProjectCardProps {
  image: string;
  imageAlt: string;
  title: string;
  name: string;
  description: string;
  url: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  imageAlt,
  name,
  description,
  url,
}) => {
  return (
    <Card style={{ border: '1px solid white' }} sx={{ background: 'black' }}>
      <CardMedia
        sx={{ height: '100%', objectFit: 'contain' }}
        component='img'
        image={new URL(
          '../projects/odinLandingPage/projectImages/project01Preview.png',
          import.meta.url
        ).toString()}
        title={imageAlt}
      />
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
};

export default ProjectCard;
