import React from 'react'
import classes from './Section.module.css'
import Title from '../Title/Title'
import Text from '../Text/Text'
import Images from '../Images/Images'

const section = (props) => (
  <section className={classes.Section}>
    {props.title ? <Title>{props.title}</Title> : null}
    {props.text ? <Text position={props.textPosition}>{props.text}</Text>: null}
    {props.images ? <Images images={props.images}/> : null }
  </section>
)

export default section