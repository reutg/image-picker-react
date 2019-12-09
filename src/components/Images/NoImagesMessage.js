import React, { Component } from 'react'
import { Typography } from '@material-ui/core'

class NoImagesMessage extends Component {
  render() {
    return (
      <Typography variant='subtitle1' color='secondary'>
        No images were found
      </Typography>
    )
  }
}

export default NoImagesMessage
