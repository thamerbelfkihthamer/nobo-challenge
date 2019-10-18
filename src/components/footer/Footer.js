import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from './Copyright';

const useStyles = makeStyles(theme => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));


export default class Footer extends Component{

    render(){
        return(
            <footer className={useStyles.footer} style={{ marginBottom: 50}}>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Nobo
                </Typography>
                <Copyright />
            </footer>
        )
    }
}