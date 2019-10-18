import React, { Component } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Search from './Search';
import {PATH_BASE, PARAM_SEARCH, DEFAULT_QUERY} from '../constant';
import ContentLoader from 'react-content-loader'
import NoMatch from './NoMatch';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import avatar from '../img/default.jpg';
import { Link } from 'react-router-dom';

export default class Films extends Component {

    constructor(props){
        super(props);
        this.state = {
            films: [],
            searchTerm: DEFAULT_QUERY,
            isLoading: false,
            error: null
        }

        this.fetchFilms = this.fetchFilms.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    makeStyles(theme){
        return {
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
            paddingTop: '56.25%', // 16:9
          },
          cardContent: {
            flexGrow: 1,
          },
        }
      }

    onSearchChange(e){
        this.setState({
            searchTerm: e.target.value,
            isLoading: true
        })

        this.handleSearch(e);
    }

    handleSearch(e){
        
        this.setState({
            isLoading : true, 
        });

        this.fetchFilms();

        e.preventDefault();
    }
    
    async fetchFilms(){
        try{
           let res = await axios.get(`${PATH_BASE}${PARAM_SEARCH}${this.state.searchTerm}`);

           if(res.status === 200){
                this.setState({
                    films: res.data,
                    isLoading: false
                })
           }else{
               this.setState({
                   error : true
               })
           }
        } catch(err){
            this.setState({
                error: true
            })
        }
    }

  componentDidMount() {
    this.fetchFilms();
  }

  render(){
    const { films, isLoading, error } = this.state; 
    const classes = makeStyles();

    return (
        error ? <NoMatch /> :

        <React.Fragment>
            <main>   
                <Search handleSearch={this.handleSearch} searchTerm={this.state.searchTerm} onChange={this.onSearchChange}></Search>

                {
                
                isLoading ? <ContentLoader /> :

                <Container maxWidth="md">
                     <Grid container spacing={4}  style={{ marginBottom: 100}}>
                        {films.map(film => (
                            <Grid item key={film.show.id} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={film.show.image ? film.show.image.medium : avatar }
                                    style={{ paddingTop: '56.25%' }}
                                    title={film.show.name}
                                    />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2" >
                                    { film.show.name }
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                    <Link to={`/films/${film.show.id}`}>Detail</Link>
                                    </Button>
                                </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                }
            </main>
        </React.Fragment>
      );
  }
}