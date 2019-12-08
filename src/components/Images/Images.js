import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { toJS } from 'mobx'
import { Snackbar, Slide } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

import Image from './Image'
import NoImagesMessage from './NoImagesMessage'

const styles = {
  images: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '3% 4%',
  },
  infiniteScroll: {
    display: 'flex',
    justifyContent: 'center',
  },
}

@inject('imagesStore')
@observer
class Images extends Component {
  constructor() {
    super()
    this.state = {
      isSnackbarOpen: false,
    }
  }

  saveToFavorites = image => {
    const favorites = toJS(this.props.imagesStore.favorites)
    const favorite = favorites[image.id]

    if (!favorite) {
      this.props.imagesStore.saveToFavorites(image)
    } else {
      this.setState({ isSnackbarOpen: true })
    }
  }

  handleClose = () => {
    this.setState({ isSnackbarOpen: false })
  }

  render() {
    const { classes } = this.props
    const images = toJS(this.props.imagesStore.images)
    const { isSnackbarOpen } = this.state
    const { noResults } = this.props.imagesStore
    return (
      <div className={classes.images}>
        {noResults ? (
          <NoImagesMessage />
        ) : (
          images.map(image => (
            <Image key={image.id} image={image} saveToFavorites={this.saveToFavorites} />
          ))
        )}

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={isSnackbarOpen}
          autoHideDuration={2000}
          onClose={this.handleClose}
          TransitionComponent={Slide}
          message={<span>Image already saved to favorites</span>}
        />
      </div>
    )
  }
}
export default withStyles(styles)(Images)
