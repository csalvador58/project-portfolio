// import * as React from 'react';
// import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import NavTabs from './NavTabs';

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// export default function NavBar(props) {
//   const colorMode = React.useContext(ColorModeContext);
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position='static'>
//         <Toolbar>
//           <Typography variant='h4' component='div' sx={{ flexGrow: 1, ml: 2 }}>
//             CHRIS SALVADOR
//           </Typography>
//           <IconButton
//             sx={{ ml: 1 }}
//             onClick={colorMode.toggleColorMode}
//             color='inherit'
//           >
//             {theme.palette.mode === 'dark' ? (
//               <Brightness7Icon />
//             ) : (
//               <Brightness4Icon />
//             )}
//           </IconButton>
//           <IconButton
//             size='large'
//             edge='start'
//             color='inherit'
//             aria-label='menu'
//             sx={{ mr: 2 }}
//           >
//             <NavTabs />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
