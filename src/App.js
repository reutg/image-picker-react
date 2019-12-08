import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Navbar from './components/Navbar'
import SearchInput from './components/SearchInput'
import Images from './components/Images/Images'
import Favorites from './components/Favorites/Favorites'
import { withStyles } from '@material-ui/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2C6DAA',
    },
    secondary: {
      main: '#CF5261',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"Open Sans", sans-serif',
  },
})

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width:1000px)': {
      flexDirection: 'column-reverse',
    },
  },
  search: {
    width: '65%',
    '@media (max-width:1000px)': {
      width: '100%',
    },
  },
}
@inject('imagesStore')
@observer
class App extends Component {
  getImages = async searchInput => {
    await this.props.imagesStore.getImages(searchInput)
  }

  render() {
    const { classes } = this.props
    return (
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <div className={classes.container}>
          <div className={classes.search}>
            <SearchInput getImages={this.getImages} />
            <Images />
          </div>
          <Favorites />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(App)
