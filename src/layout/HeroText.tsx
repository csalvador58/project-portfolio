import { Paper, Typography } from '@mui/material';

export default function HeroText() {
  return (
    <Paper elevation={0} sx={{ background: 'black' }} square>
      <Typography
        textAlign={{ xl: 'center' }}
        fontWeight='light'
        variant='h6'
        color='white'
        component='p'
        padding={{ xs: '2rem', sm: '4rem', md: '6rem' }}
      >
        In 2022, I decided to pursue a long-held passion for coding that
        originated from my experience with programming 68HC11 micro-controllers
        in C many years ago. Coding enables me to express my creativity while building
        fun applications. I embrace self-taught learning and actively
        engage in coding events within Web2 and Web3 communities to continuously
        enhance my skills.
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
        I'm highly interested in Zero-Knowledge proofs and it's application in
        Healthcare. Feel free to connect with me if you're along the same dev
        journey or interests.
      </Typography>
    </Paper>
  );
}
