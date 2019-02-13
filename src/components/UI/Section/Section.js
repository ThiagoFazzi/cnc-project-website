import React from 'react'
import classes from './Section.module.css'
import Title from '../Title/Title'
import Text from '../Text/Text'

const section = (props) => {
  let images = ""
  if(props.images){
    if(Array.isArray(props.images)) {
      console.log(Array.isArray(props.images))
      images = <div className={[classes.Image, classes.ImageCenter].join(' ')}>
      {props.images.map((image, i) => <img key={i} src={image} alt="" /> )}
      </div>
    } else{
      console.log(Array.isArray(props.images))
      console.log(props.images)
      images = <div className={[classes.Image, classes.ImageRight].join(' ')}>
        <img src={props.images} alt="" />
        </div>
    }
  }

  return(
    <section className={classes.Section}>
      {props.title ? <Title>{props.title}</Title> : null}
      {props.text ? <Text position={props.textPosition}>{props.text}</Text>: null}
      {props.images ? images : null }
    </section>
  )
}

export default section