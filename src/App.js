import './App.css';
import React from 'react'
import { withRouter } from 'react-router-dom'
import Router from './Router'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import primaryColor from '@material-ui/core/colors/green'
import secondaryColor from '@material-ui/core/colors/red'

import { Button } from '@material-ui/core'

import CssBaseline from '@material-ui/core/CssBaseline'

const defaultTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: primaryColor[700]
    }
  }
})

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: secondaryColor[700]
    }
  }
})

var themes = {}
themes.light = lightTheme
themes.dark = defaultTheme

function App() {

  const [currentTheme,setCurrentTheme] = React.useState('dark')

  return (
    <div className="App">

<ThemeProvider theme={themes[currentTheme]}>
  <CssBaseline />
      <Router />

      <Button onClick={()=>{
      if (currentTheme === 'light') {
        setCurrentTheme('dark')
      } else {
        setCurrentTheme('light')
      }
    }}>Change Theme</Button>
      
</ThemeProvider>
    </div>
  );
}

export default withRouter(App);
