import React from 'react'
import classes from './Home.module.css'
import Header from '../../Header/Header'
import Section from '../../UI/Section/Section'
import imageHeader from '../../../assets/images/home-header.png'
import imageOverview from '../../../assets/images/overview.png'
import imageWhyCncA from '../../../assets/images/axis-z-part-project.png'
import imageWhyCncB from '../../../assets/images/axis-z-part-ready.jpeg'
import imageWhyCncC from '../../../assets/images/axis-z-part-assembly.jpeg'

 

const overviewText = 'As the maker community and DYI have been growing in the last years, many new types of hardware to prototype projects are available to allow these crazy people like me can create amazing projects and new ideas that come every day in our minds. I would like to share my project CNC Machine Router in which I have learned a lot about electronics, mechanics and of course, how the CNC machine works and its application on the real world. Enjoy!!'
const whatIsCncText = ('Basically, CNC machining is a manufacturing process in which pre-programmed computer software dictates the movement of factory tools and machinery. With CNC machining, three-dimensional cutting tasks can be accomplished in a single set of prompts. Short for “computer numerical control,” the CNC process supersedes the limitations of manual control, where live operators are needed to prompt and guide the commands of machining tools via levers, buttons, and wheels.')
const whyCncRouterMachineText  = 'When I decided to jump into this project the main idea was to have fun and learn new things, but after my first machine was ready and working, I figured out that it could be a good solution for small companies which to need prototype small pieces or parts of that. Therefore I started a new project using my first machine to produce accurate parts to assemble a new machine.'


const home = (props) => (
  <>
    <Header 
      image={imageHeader}
      title="CNC Router Machine"
      description="Take a look at this amazing project"/>    
    <div className={classes.Content}>
      
    <Section
      title="Overview"
      text={overviewText}
      textPosition="left"
      images={imageOverview}
    />

    <Section
      title="What is CNC Machine?"
      text={whatIsCncText}
      textPosition="center"
    />
      
      <Section
        title="Why CNC Router Machine ?"
        text={whyCncRouterMachineText}
        textPosition="center"
        images={[imageWhyCncA, imageWhyCncB, imageWhyCncC]}
      />
    </div>
  </>
)

export default home