import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Navbar from './components/Navbar'
import SearchInput from './components/SearchInput'
import Images from './components/Images'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#a20025',
    },
    secondary: {
      main: '#6d8764',
    },
  },
  typography: {
    useNextVariants: true,
  },
})
@inject('imagesStore')
@observer
class App extends Component {
  getImages = async searchInput => {
    await this.props.imagesStore.getImages(searchInput)
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Navbar />
          <SearchInput getImages={this.getImages} />
          <Images />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
