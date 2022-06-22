import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Text from '../components/Text';
import CardItem from '../components/card';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const drawerWidth = 240

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
    <AppWrapper>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto', marginInlineStart: '32px', marginBlockStart: '32px' }}>
            {texts.map((text, index) => {
              return (
                <Text text={text} key={index} />
              )
            })}
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginBlockStart: '64px' }}>
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
    </AppWrapper>
  );
}

