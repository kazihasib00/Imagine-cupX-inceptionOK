import React from 'react'

import {  Route, Link, Router } from 'react-router-dom'
import Home from './pages/home/Home'
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { StylesProvider, ThemeProvider } from '@material-ui/core'
import { createTheme } from './theme'
import {
  createStyles,
  jssPreset,
  makeStyles
} from '@material-ui/core';
import useSettings from './hooks/useSettings'


const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%'
    },
    body: {
      height: '100%',
      width: '100%'
    },
    '#root': {
      height: '100%',
      width: '100%'
    }
  }
}));

function App() {

  // useStyles();
  // const { settings } = useSettings();

  return (
    <ThemeProvider >
      <StylesProvider >
           {/* <Login/> */}
           <Signup/>
      </StylesProvider>
    </ThemeProvider>
  )
}

export default App
