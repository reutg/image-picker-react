import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import HeartIcon from '@material-ui/icons/FavoriteBorder'
import { Fab } from '@material-ui/core'

const styles = {
  image: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '25vh',
    height: '25vh',
    margin: '1.5%',
    backgroundSize: 'cover',
    borderRadius: '1%',
  },
  button: {
    margin: '5%',
    color: 'rgba(52, 70, 93, 0.3)',
  },
  icon: {
    color: '#000',
  },
}

class Image extends Component {
  render() {
    const { classes, image, saveToFavorites } = this.props
    
    if (image) {
      return (
        <div
          className={classes.image}
          style={{ backgroundImage: `url('${image.largeImageURL}')` }}
        >
          <Fab
            size='small'
            classes={{ root: classes.button }}
            onClick={() => saveToFavorites(image)}
          >
            <HeartIcon className={classes.icon} />
          </Fab>
        </div>
      )
    }
  }
}

export default withStyles(styles)(Image)
