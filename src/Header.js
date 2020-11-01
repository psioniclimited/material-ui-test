import React from 'react'
import {AppBar, Typography, Toolbar, makeStyles} from '@material-ui/core';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';

const useStyles = makeStyles({
  typographyStyels: {
    flex: 1
  }
})

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyels}>
          This is header
        </Typography>
        <AcUnitRoundedIcon />
      </Toolbar>
    </AppBar>
  )
}

export default Header;
