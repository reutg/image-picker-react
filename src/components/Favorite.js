import React, { Component } from 'react'
import { Typography, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import EditIcon from '@material-ui/icons/EditOutlined'
import DeleteIcon from '@material-ui/icons/DeleteOutlined'

const styles = {
  favorite: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '3% 0',
    overflow: 'hidden',
  },
  image: {
    width: '10vh',
    height: '10vh',
  },
  description: {
    width: '40%',
  },
  actions: {
    width: '20%',
    display: 'flex',
    justifyContent: 'space-around',
    paddingRight: '5%',
  },
}

class Favorite extends Component {
  render() {
    const { classes, favorite } = this.props
    return (
      <Paper className={classes.favorite}>
        <img className={classes.image} src={favorite.imageURL} alt={favorite.description} />
        <div className={classes.description}>
          <Typography variant='caption'>{favorite.description}</Typography>
        </div>
        <div className={classes.actions}>
          <EditIcon />
          <DeleteIcon />
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(Favorite)
