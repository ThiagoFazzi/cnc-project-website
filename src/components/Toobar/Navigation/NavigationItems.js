import React from 'react'
import classes from './NavigationItems.module.css'
import { Link } from 'react-router-dom'

const navigationItems = (props) => (
  <div className={props.scrolling ? classes.NavigationItemsOn : classes.NavigationItemsOff}>
    <ul>
      <Link to={{pathname: '/'}}>
        <li>Home</li>
      </Link>
      <Link to={{pathname: '/project'}}>
        <li>Project</li>
      </Link>
      <Link to={{pathname: '/mechanical'}}>
        <li>Mechanical</li>
      </Link>
      <Link to={{pathname: '/eletronic'}}>
        <li>Eletronic</li>
      </Link>
    </ul>
  </div>

)

export default navigationItems