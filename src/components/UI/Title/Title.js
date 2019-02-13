import React from 'react'
import classes from './Title.module.css'

const title = (props) => (
  <>
    <h1 className={classes.Title}>{props.children}</h1>
  </>
)

export default title