import React from 'react';
import Wrapper from '../Wrapper/Wrapper';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import classes from './Layout.css';


const layout = (props) => {
   
    return (
        <Wrapper>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Climatempo
                    </Typography>   
                </Toolbar>
            </AppBar>
            
            <main className={classes.Content}>
                {props.children}
            </main>
        </Wrapper>
    );

};

export default layout;