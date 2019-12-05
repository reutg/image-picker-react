import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import Favorite from './Favorite'

const styles = {
  container: {
    width: '30%',
  },
  header: {
    textAlign: 'center',
  },
  favorites: {
    marginTop: '10.5%',
  },
}

@inject('imagesStore')
@observer
class Favorites extends Component {
  constructor() {
    super()
    this.state = {
      favorites: [
        {
          imageURL: 'https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg',
          description: 'image description',
        },
        {
          imageURL:
            'https://i.pinimg.com/originals/94/dd/57/94dd573e4b4de604ea7f33548da99fd6.jpg',
          description: 'image description',
        },
        {
          imageURL:
            'https://www.thelocal.fr/userdata/images/article/21ce9e6de95eb2d227451f186d0c6d54550a4364658b87c1c0326ba6127fff5f.jpg',
          description: 'image description',
        },
      ],
    }
  }
  render() {
    const { classes, imagesStore } = this.props
    const { favorites } = this.state
    return (
      <div className={classes.container}>
        <Typography color='secondary' className={classes.header} variant='h6'>
          Favorites list
        </Typography>
        <div className={classes.favorites}>
          {favorites.map((favorite, i) => (
            <Favorite key={i} favorite={favorite} />
          ))}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Favorites)
