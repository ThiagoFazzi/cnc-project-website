import React from 'react'
import classes from './Images.module.css'

const images = (props) => {
  let images = ""
  if(props.images){
    if(Array.isArray(props.images)) {
      images = <div className={[classes.Images, classes.Center].join(' ')}>
      {props.images.map((image, i) => <img key={i} src={image} alt="" /> )}
      </div>
    } else{
      images = <div className={[classes.Images, classes.Right].join(' ')}>
        <img src={props.images} alt="" />
        </div>
    }
  }

  return(
    <>
      {images}
    </>
  )
}

export default images