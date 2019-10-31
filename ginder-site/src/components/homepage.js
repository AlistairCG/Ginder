import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import logo from '../images/ginder.PNG' // relative path to image 
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
       Ginder
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '65.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6];

export default function Album() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              >
            
            <Container fixed maxWidth="xs">
            <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://external-preview.redd.it/7Gp54sFMBojExXGd-JNzPGd0ez__7Qpzb1W1ULc28Xg.png?auto=webp&s=4b6f6998c20aac527b7c457711672bd3c20b8d36"
                    title="Image title"
                  />
                </Card>
            </Container>  
            <Container fixed maxWidth="xs">
            <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={logo}
                    title="Image title"
                  />
                </Card>
            </Container> 
            <Container maxWidth="xs">
            <Card  fixed className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://s3.amazonaws.com/cdn-thumbthrone/wp-content/uploads/2014/04/ArcheAge.jpg"
                    title="Image title"
                  />
                </Card>
            </Container> 
          </Grid>
        </div>
        <div className={classes.heroContent}>
        <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              >
          <Container maxWidth="xs">
          <Typography component="h5" variant="h5" align="center" color="textSecondary" gutterBottom>
           It all started with a dream...
          </Typography>

          </Container>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Ginder
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Level up your gaming and social experiences 
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                <a href="/registration">
                  <Button variant="contained" color="primary">
                  Sign Up for Ginder 
                  </Button>
                  </a>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Read More About Us
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
          <Container maxWidth="xs">
          <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
            About us
          </Typography>
          <Typography component="h5" variant="h5" align="center" color="textSecondary" >
            We are passionate gamers who want to bring the very best social connections to your gamer life.
            Founded in 2019 @ Seneca College, we are bringing your future to the present.
          </Typography>

          </Container>
        </Grid>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Typography variant="h4" align="center">
            Hot Ginder Groups in Your Area
            </Typography> 
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://picsum.photos/400"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      An Example Group
                    </Typography>
                    <Typography>
                      This is an example group for LEET gamers. Join Us!
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" size="small" color="primary">
                      Join
                    </Button>
                    <Button size="small" color="primary">
                      Details
                    </Button>
                    <Card>
                    <Typography color="primary">
                        TableTop | DND
                    </Typography>
                    </Card>
                    <Card>
                    <Typography>
                        Toronto
                    </Typography>
                    </Card>
                  </CardActions>
                </Card>
              </Grid>
              
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Ginder 2019
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Learn More About Us on Social Media
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}