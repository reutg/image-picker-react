import React, { Component } from 'react'
import { Dialog, Fab } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

import CloseIcon from '@material-ui/icons/Close'

const styles = {
  image: {
    width: '70vh',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    alignItems: 'flex-end',
    backgroundSize: '100% 100%',
  },
  icon: {
    margin: '1%',
    width: '35px',
    height: '30px',
    backgroundColor: 'rgba(52, 70, 93, 0.3)',
  },
}

class FavoriteDialog extends Component {
  render() {
    const { classes, favorite, closeDialog, isDialogOpen } = this.props
    return (
      <Dialog onClose={closeDialog} open={isDialogOpen}>
        <div
          className={classes.image}
          style={{ backgroundImage: `url('${favorite.imageURL}')` }}
        >
          <Fab size='small' className={classes.icon} onClick={closeDialog}>
            <CloseIcon />
          </Fab>
        </div>
      </Dialog>
    )
  }
}

export default withStyles(styles)(FavoriteDialog)
