import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import InfoIcon from '@material-ui/icons/Info';


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
    root: {
      height: '100%',
    },
    image: {
      backgroundImage: 'url(https://wallpaperaccess.com/full/417645.jpg)',
      backgroundRepeat: 'repeat-y',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(2, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      width: 250,
      height: 170,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        width: 200,
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
export default function SignInSide() {
    
    
    const classes = useStyles();
    const cards = [1, 2, 3];
  
    return (
        <Box className={classes.image}>
    <Container maxWidth="sm"  >
        <Paper className={classes.root}>
        <Grid container justify="center" alignItems="center">
        <Typography variant="h3" component="h3">
           Harold's Profile
        </Typography>
        </Grid>
        <Grid container direction="column"  justify="space-between" alignItems="center">
        <Avatar alt="Remy Sharp" src="https://i.kym-cdn.com/entries/icons/original/000/016/546/hidethepainharold.jpg" className={classes.avatar} />
        <Grid container justify="space-between" alignItems="center"> 
                <TextField
                className={classes.margin, classes.textField}
                id="input-with-icon-textfield"
                label="First Name"
                defaultValue="Harold"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <AccountCircle />
                    </InputAdornment>
                ),
                }}
                />
                <TextField
                className={classes.margin, classes.textField}
                id="input-with-icon-textfield"
                label="Last Name"
                defaultValue="Haroldson"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <AccountCircle />
                    </InputAdornment>
                ),
                }}
            />
        </Grid>
        <Divider />
        <Grid container justify="space-between" alignItems="center"> 
        <TextField
            className={classes.margin, classes.textField}
            id="input-with-icon-textfield"
            label="Age"
            type="number"
            max="100"
            min="13"
            fullWidth
            defaultValue="40"
        
        />
      <TextField
            className={classes.margin, classes.textField}
            id="input-with-icon-textfield"
            label="Email"
            type="text"
            max="100"
            min="13"
            fullWidth
            defaultValue="abc@myseneca.ca"      
        />
        </Grid>
        <Typography variant="p" color="textPrimary" component="p">
         Changes are saved automatically
        </Typography>
        <Divider />
        <Paper className={classes.paper}>
        <Typography variant="h5" color="textPrimary" component="h5">
         My Skill Levels
        </Typography>
        <Grid container spacing={1}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://picsum.photos/400"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h5">
                      Skill Rating
                    </Typography>
                    <Typography>
                     Challenger Tier
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" size="small" color="primary">
                      Change
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              
            ))}
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
        <Typography variant="h5" color="textPrimary" component="h5">
         My Interests
        </Typography>
        <Grid container spacing={1}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://picsum.photos/400"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h5">
                      An Interest
                    </Typography>
                    <Typography>
                      I like this
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" size="small" color="primary">
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              
            ))}
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
        <Typography variant="h5" color="textPrimary" component="h5">
         My Groups
            </Typography>
         <Grid container spacing={1}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://picsum.photos/400"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h5">
                      An Group
                    </Typography>
                    <Typography>
                      For Game Lovers
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" size="small" color="primary">
                      Details
                    </Button>
                    <Button variant="contained" size="small" color="secondary">
                      Leave
                    </Button>

                  </CardActions>
                </Card>
              </Grid>
              
            ))}
          </Grid>
     
        </Paper>
       </Grid>
        </Paper>
      </Container>
      </Box>
    );
  }