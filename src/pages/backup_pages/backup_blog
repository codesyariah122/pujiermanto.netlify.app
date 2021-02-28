import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  	display: 'flex'
  },
  card: {
  	maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Blog = () => {
	const [spacing, setSpacing] = React.useState(2);
	  const classes = useStyles();

	return (
		<Grid container className={classes.root} spacing={2}>
	        <Grid container justify="center" spacing={spacing}>
	          {[0, 1, 2].map((value) => (
	            <Grid key={value} item>

	            	<Card className={classes.card}>
				      <CardHeader
				        avatar={
				          <Avatar aria-label="recipe" className={classes.avatar}>
				            R
				          </Avatar>
				        }
				        title="Shrimp and Chorizo Paella"
				        subheader="September 14, 2016"
				      />
				      <CardMedia
				        className={classes.media}
				        image="/static/images/cards/paella.jpg"
				        title="Paella dish"
				      />
				      <CardContent>
				        <Typography variant="body2" color="textSecondary" component="p">
				          This impressive paella is a perfect party dish and a fun meal to cook together with your
				          guests. Add 1 cup of frozen peas along with the mussels, if you like.
				        </Typography>
				      </CardContent>
				    </Card>
	            </Grid>
	          ))}
	      </Grid>
    	</Grid>
	)
}

export default Blog