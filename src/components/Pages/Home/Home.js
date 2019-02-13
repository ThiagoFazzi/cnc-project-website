import React from 'react'
import classes from './Home.module.css'
import Header from '../../Header/Header'
import imageHeader from '../../../assets/images/header.png'
import Section from '../../UI/Section/Section'
import imageOverview from '../../../assets/images/overview.png'



import Title from '../../UI/Title/Title' 

const overviewText = 'My technical skills include JavaScript, NodeJs, Typescript, HTML, CSS, React, Redux, Docker. Building state-of-the-art, easy to use, user-friendly websites and applications truly became a something that I love to do. In addition to my current knowledge, I actively seek out new technologies, being by myself or attending to meetups and conferences, to stay up-to-date on industry trends and advancements. '
const whatIsCncText = 'My technical skills include JavaScript, NodeJs, Typescript, HTML, CSS, React, Redux, Docker. Building state-of-the-art, easy to use, user-friendly websites and applications truly became a something that I love to do. In addition to my current knowledge, I actively seek out new technologies, being by myself or attending to meetups and conferences, to stay up-to-date on industry trends and advancements. '
const whyCncRouterMachineText  = 'My technical skills include JavaScript, NodeJs, Typescript, HTML, CSS, React, Redux, Docker. Building state-of-the-art, easy to use, user-friendly websites and applications truly became a something that I love to do. In addition to my current knowledge, I actively seek out new technologies, being by myself or attending to meetups and conferences, to stay up-to-date on industry trends and advancements. '


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
      title="What is CNC"
      text={whatIsCncText}
      textPosition="center"
    />
      
      <Section
        title="Why CNC Router Machine ?"
        text={whyCncRouterMachineText}
        textPosition="center"
        images={[imageOverview, imageOverview, imageOverview, imageOverview]}
      />
    </div>
  </>
)

export default home