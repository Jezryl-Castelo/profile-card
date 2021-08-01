import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
// import Form from './components/Form/form';
import NavBar from './components/NavBar/navbar.component.js';
import Header from './components/Header/header.component';
import Home from './pages/home.page';


// import memories from './images/memories.png';
// import useStyles from './styles';

const App = () => {
    // const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return(
        <Container maxwidth='lg'>
            <NavBar />
            <Header />
            <Posts />
            <Home />
           
            
            {/* <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                    
                        </Grid>

                    </Grid>
                </Container>
            </Grow> */}
        </Container>
    );
}

export default App;