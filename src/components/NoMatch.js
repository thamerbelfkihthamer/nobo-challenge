import React from 'react';
import i from '../img/giphy.gif';
import Container from '@material-ui/core/Container';


export default function NoMatch() {
    return (
        <Container component="main" maxWidth="xs" style={{ marginBottom: 100, marginTop: 100}}>
            <img src={i} alt="fd" />
        </Container>
    )
}