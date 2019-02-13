import React from 'react'
import classes from './SideBarMenu.module.css'

const sideBarMenu = (props) => (
  <div className={!props.open ? [classes.SideBarMenu, classes.Open].join(' ') : [classes.SideBarMenu, classes.Close].join(' ')}>
  {props.children}
</div>
)

export default sideBarMenu