import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

import Text from '../components/Text';
import CardItem from '../components/card';


const texts = ['Dashboard', 'About', 'Company'];
const cards = [
  {
    fruit: 'Mango',
    price: 6,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    buttonText: 'Learn more'
  },
  {
    fruit: 'Orange',
    price: '4',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    buttonText: 'Learn more'
  },
  {
    fruit: 'Guava',
    price: '3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    buttonText: 'Learn more'
  },
  {
    fruit: 'Peach',
    price: '7',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    buttonText: 'Learn more'
  },
  {
    fruit: 'Pineapple',
    price: '7',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    buttonText: 'Learn more'
  },
  {
    fruit: 'Apple',
    price: '5',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    buttonText: 'Learn more'
  }
]

export default function App() {
  return (
    <Box>
      <Box>
        <Box sx={{height: '80px', backgroundColor: 'primary.dark'}}/>

        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '100vh', overflow: 'hidden'}}>
          <Box sx={{marginInlineStart: '32px', paddingInlineEnd: '48px', borderRight: '0.5px solid lightgrey', paddingBlockStart: '24px'}}>
            {
              texts.map((text, index) => {
                return (
                  <Text key={index} text={text} />
                )
              })
            }
          </Box>
          <Box component="main" sx={{paddingInline: '48px', borderLeft: '0.5px solid lightgrey', paddingBlockStart: '24px'}}>
            <Box>
              <Typography variant='h2'>
                Dashboard
              </Typography>
            </Box>
            <Box sx={{display: 'grid', gridTemplateColumns: 'auto auto auto', columnGap: '32px', rowGap: '32px', marginBlockStart: '24px' }}>
              {cards.map((card, index) => {
                return (
                  <CardItem key={index} fruit={card.fruit} price={card.price} description={card.description} buttonText={card.buttonText} />
                )
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

