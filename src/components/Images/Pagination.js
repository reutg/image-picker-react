import React, { Component } from 'react'
import { Button, ButtonGroup, IconButton } from '@material-ui/core'
import { inject, observer } from 'mobx-react'

import ArrowBack from '@material-ui/icons/ArrowBack'
import ArrowForward from '@material-ui/icons/ArrowForward'
import { withStyles } from '@material-ui/styles'

const styles = theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '5%',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  pageButton: {
    fontSize: '0.7em',
  },
  currentPage: {
    fontSize: '0.7em',
    color: theme.palette.secondary.main,
  },
  grouped: {
    minWidth: '10%',
    padding: '2px 8px',
  },
})

@inject('imagesStore')
@observer
class Pagination extends Component {
  createPages = () => {
    const { classes, imagesStore } = this.props
    const pages = []

    for (let i = 1; i <= imagesStore.totalPagesAmount; i++) {
      pages.push(
        <Button
          onClick={() => this.goToPage(i)}
          className={imagesStore.pageNum === i ? classes.currentPage : classes.pageButton}
          key={i}
        >
          {i}
        </Button>
      )
    }

    return pages
  }

  goToPage = num => {
    this.props.imagesStore.goToPage(num)
  }

  render() {
    const { classes, imagesStore } = this.props

    return (
      <div className={classes.container}>
        <IconButton
          className={classes.arrow}
          onClick={() => this.goToPage(imagesStore.pageNum - 1)}
        >
          <ArrowBack />
        </IconButton>

        <ButtonGroup
          classes={{ grouped: classes.grouped, root: classes.buttonGroup }}
          variant='text'
        >
          {this.createPages()}
        </ButtonGroup>

        <IconButton
          className={classes.arrow}
          onClick={() => this.goToPage(imagesStore.pageNum + 1)}
        >
          <ArrowForward />
        </IconButton>
      </div>
    )
  }
}

export default withStyles(styles)(Pagination)
