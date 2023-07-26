import { Paper, Typography } from '@mui/material';

export default function HeroText() {
  return (
    <Paper elevation={0} sx={{ background: 'black' }} square>
      <Typography
        textAlign={{ xl: 'center' }}
        fontWeight='light'
        fontSize={{ xs: '1rem', sm: '1.2rem', md: '1.5rem' }}
        color='white'
        component='p'
        padding={{ xs: '2rem', sm: '4rem', md: '6rem' }}
      >
        In 2022, I decided to pursue a long-held passion for coding that
        originated during a time I learned to program 68HC11 micro-controllers.
        I was inspired by Web3 as I found blockchain and cryptography to be
        fascinating emerging technologies. In my dev journey, I embraced the
        path of self-taught developers as well as learning from many Web2 and
        Web3 communities. In June 2023, I completed my Full-Stack Developer
        certificate from{' '}
        <a href='https://www.pce.uw.edu/' target='_blank'>
          University of Washington - PCE
        </a>
        .
        <br />
        <br />
        If I'm not outdoors hiking{' '}
        <span role='img' aria-label='smiling face with heart-eyes'>
          &#129406;
        </span>{' '}
        or running{' '}
        <span role='img' aria-label='smiling face with heart-eyes'>
          &#127939;
        </span>
        , you can find me actively building with the Web3 communities like
        Alchemy, Encode, and ETHGlobal. While I have a strong preference for
        backend and databases, I also enjoy working on the frontend. Currently
        I've been studying Zero-Knowledge proofs and the possible uses in
        Healthcare. Feel free to connect with me if you're along the same dev
        journey or interests.
      </Typography>
    </Paper>
  );
}
