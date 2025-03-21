import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet-async';
import SignUpForm from './SignUpForm';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUpSide() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <Grid
        container
        component="main"
        justifyContent={'center'}
        alignItems={'center'}
        height={'100vh'}
      >
        <Grid
          sx={{
            borderRadius: 2
          }}
          item
          xs={12}
          sm={6}
          md={4}
          xl={3}
          component={Paper}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Typography component="h2" variant="h4" mb={1}>
              Your Journey Begins Here!
            </Typography>
            <Typography component="p" variant="subtitle1" align="center">
              Experience seamless features designed to enhance your productivity
              and streamline your workflow. Get started today and take the first
              step towards transforming your collaborations!
            </Typography>
            <SignUpForm />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
