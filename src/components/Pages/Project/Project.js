import React from 'react'
import classes from './Project.module.css'
import Header from '../../Header/Header'
import imageHeader from '../../../assets/images/project-header.png'

const project = () => (
  <>
    <Header 
      image={imageHeader}
      title="Let's starts"
      description="Everything comes from a crazy idea"/>    
    <div className={classes.Content}>
      

    </div>
  </>
)

export default project