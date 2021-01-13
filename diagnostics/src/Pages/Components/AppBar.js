// core react import
import React from 'react';

// material and component modules
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

// external css imports
import './AppBar.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        float: 'right',
        position: 'relative',
    },
    title: {
        flexGrow: 1,
    },
}));

export default function DenseAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar variant='dense'>
                    <IconButton
                        edge='start'
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='menu'
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        <Link to='/' className='app-bar__title'>
                            Diagnostics App
                        </Link>
                    </Typography>
                    <Link exact to='/history' className='app-bar__title'>
                        HISTORY
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
