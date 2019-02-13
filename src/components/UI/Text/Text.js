import React from 'react'
import classes from './Text.module.css'

const text = (props) => {
  let style = classes.Text
  switch (props.position) {
    case "center":
      style = [classes.Text, classes.Center].join(' ')
      break;
    case "left":
      style = [classes.Text, classes.Left].join(' ')
      break
    
    case "right":
      style = [classes.Text, classes.Right].join(' ')
      break
    default:
      break;
  }
 
 return(
 <div className={style}>
    <p>{props.children}</p>
  </div>
)
}

export default text