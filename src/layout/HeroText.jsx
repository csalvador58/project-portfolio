import React from 'react';
import { Typography } from '@mui/material';

export default function HeroText() {
    
  return (
    <>
      <Typography
        fontWeight='light'
        variant='h6'
        component='p'
        padding={{ xs: '2rem', sm: '4rem' }}
      >
        I'm a developer, a tech enthusiast, and inspired by Web3. I have high
        interests in Blockchain security and zero-knowledge proofs. Healthcare
        and Finance are the industries that I previously worked in and believe
        to have the greatest benefit to utilize Web3 technology. I'm open to
        connect with anyone who is along the same dev journey or interests.
      </Typography>
    </>
  );
}
