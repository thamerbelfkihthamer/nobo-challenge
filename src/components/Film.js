import React, { Component} from 'react';
import axios from 'axios';
import { PATH_ITEM } from '../constant';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import parser from 'html-react-parser';
import avatar from '../img/default.jpg';
import NoMatch from '../components/NoMatch';


export default class Film extends Component{

    constructor(props){
        super(props);
        this.state = {
            film : {},
            error: null
        }

        this.fetchFilm = this.fetchFilm.bind(this);
    }


    makeStyles(theme){
        return {
            root: {
                flexGrow: 1,
              },
              paper: {
                padding: theme.spacing(2),
                margin: 'auto',
                maxWidth: 500,
              },
              image: {
                width: 128,
                height: 128,
              },
              img: {
                margin: 'auto',
                display: 'block',
                maxWidth: '100%',
                maxHeight: '100%',
              },
        }
    }

    componentDidMount(){
        this.fetchFilm();
    }
    
    async fetchFilm(){
        try{
            let res = await axios.get(`${PATH_ITEM}/${this.props.match.params.id}`);
            if(res.status === 200){
                this.setState({
                    film: res.data
                })
            }else{
              this.setState({
                  error: true
              })
            }

        }catch(err){
            this.setState({
                error: true
            })
        }

    }

    render(){
        const { film, error }  = this.state;
        const classes = makeStyles();

        return(
            error ? <NoMatch /> : 
            <React.Fragment>
                <Container maxWidth="md">
                    <main>
                        <div className={classes.root} style={{ marginBottom: 100, marginTop: 100}}>
                            <Paper className={classes.paper}>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt={film.name} src={film.image ? film.image.medium : avatar } />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs >
                                            <Typography gutterBottom variant="subtitle1" className={classes.justify}>
                                                Name : { film.name }
                                            </Typography>
                                            <Typography variant="body2" gutterBottom className={classes.justify}>
                                                Type : {film.type}
                                            </Typography> 
                                            <Typography variant="body2" gutterBottom color="textSecondary">
                                        
                                                Genres : {film.genres ? film.genres.join() : null}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Language : {film.language}
                                            </Typography>  
                                            <Typography variant="body2" gutterBottom>
                                                summary : { parser(`${film.summary}`) }
                                            </Typography>
                                        </Grid>
                                        </Grid>
                                    </Grid>
                                    </Grid>
                            </Paper>
                        </div>
                    </main>
                </Container>
        </React.Fragment>
        )
    }
}