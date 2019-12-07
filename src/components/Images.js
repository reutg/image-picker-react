import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { toJS } from 'mobx'
import { withStyles } from '@material-ui/styles'

import Image from './Image'

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
  saveToFavorites = image => {
    const savedImage = {
      id: image.id,
      imageURL: image.largeImageURL,
      description: image.tags,
    }
    this.props.imagesStore.saveToFavorites(savedImage)
  }

  render() {
    const { classes } = this.props
    const images = toJS(this.props.imagesStore.images)

    return (
      <div className={classes.images}>
        {images.map(image => (
          <Image key={image.id} image={image} saveToFavorites={this.saveToFavorites} />
        ))}
      </div>
    )
  }
}
export default withStyles(styles)(Images)
