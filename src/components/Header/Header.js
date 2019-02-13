import React from 'react'
import classes from './Header.module.css'

const header = (props) => (
  <div className={classes.Header}>
    <img src={props.image} className={classes.Image} alt=''/>
    <div className={classes.Content}>
      <div className={classes.Title}>{props.title}</div>
      <div className={classes.Text}>{props.description}</div>
    </div>
  </div>
)

export default header