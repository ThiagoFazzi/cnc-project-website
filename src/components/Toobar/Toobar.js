import React from 'react'
import classes from './Toobar.module.css'
import NavigationItems from './Navigation/NavigationItems'

const toobar = (props) => (
  <div className={props.scrolling ? [classes.Toobar, classes.ToobarClose].join(' ') : [classes.Toobar, classes.ToobarOpen].join(' ')}>
    <div className={props.scrolling ? classes.LogoSmall : classes.LogoBig}>
      homeRouter
    </div>
    <nav>
      <NavigationItems scrolling={props.scrolling}/>
    </nav>
    
  </div>
)

export default toobar