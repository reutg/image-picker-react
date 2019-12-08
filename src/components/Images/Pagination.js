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
  },
  currentPage: {
    color: theme.palette.secondary.main,
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
          className={imagesStore.pageNum === i ? classes.currentPage : ''}
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
        <IconButton onClick={() => this.goToPage(imagesStore.pageNum - 1)}>
          <ArrowBack />
        </IconButton>
        <ButtonGroup size='small'>{this.createPages()}</ButtonGroup>
        <IconButton onClick={() => this.goToPage(imagesStore.pageNum + 1)}>
          <ArrowForward />
        </IconButton>
      </div>
    )
  }
}
export default withStyles(styles)(Pagination)
