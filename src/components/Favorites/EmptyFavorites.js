import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
}

class EmptyFavorites extends Component {
  render() {
    const { classes } = this.props

    return (
      <Typography variant='caption' classes={{ root: classes.root }}>
        There are no items in the favorites list
      </Typography>
    )
  }
}

export default withStyles(styles)(EmptyFavorites)
