import React from 'react'
import classes from './NavigationItems.module.css'
import { Link } from 'react-router-dom'

const navigationItems = (props) => (
  <div className={props.scrolling ? classes.NavigationItemsOn : classes.NavigationItemsOff}>
    <ul>
      <Link to={{pathname: `${process.env.PUBLIC_URL}/`}}>
        <li>Home</li>
      </Link>
      <Link to={{pathname: `${process.env.PUBLIC_URL}/project`}}>
        <li>Project</li>
      </Link>
      <Link to={{pathname: '/mechanical'}}>
        <li>Mechanical</li>
      </Link>
      <Link to={{pathname: '/eletronic'}}>
        <li>Eletronic</li>
      </Link>
      <Link to={{pathname: '/vmachine'}}>
        <li>Virtual Machine</li>
      </Link>
    </ul>
  </div>

)

export default navigationItems