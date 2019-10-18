import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const classes = makeStyles(theme => ({
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
}));

export default class Search extends Component{

    constructor(props){
        super(props)
    }

    render(){
        const { searchTerm, handleSearch, onChange } = this.props;

        return (
            <div className={classes.heroContent} style={{ marginBottom: 100, marginTop: 50}}>
                <Container maxWidth="sm">

                    <form style={{ marginBottom: 50}} onSubmit={handleSearch}>
                        <TextField
                            value={searchTerm}
                            onChange={onChange}
                            id="outlined-full-width"
                            style={{ margin: 8 }}
                            placeholder="What's the tv show you are looking for ? "
                            helperText="ex : Fast Layne, Go Jetters ..."
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            InputProps={{
                                endAdornment: (
                                <InputAdornment>
                                    <IconButton onClick={handleSearch}>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                                )
                            }}
                        />
                    </form>
                </Container>
            </div>
        )
    }
}
