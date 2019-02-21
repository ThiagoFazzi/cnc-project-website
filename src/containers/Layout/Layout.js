import React, { Component } from 'react'
import classes from './Layout.module.css'
import { Route } from 'react-router-dom'
import Toobar from '../../components/Toobar/Toobar'
import Home from '../../components/Pages/Home/Home'
import Project from '../../components/Pages/Project/Project'
import Mechanical from '../../components/Pages/Mechanical/Mechanical'
import Eletronic from '../../components/Pages/Eletronic/Eletronic'
import VisualMachine from '../../components/VirtualMachine/VirtualMachine'
import virtualMachine from '../../components/VirtualMachine/VirtualMachine';

class Layout extends Component {

  state = {
    scrolling: false
  }

  componentWillMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll')
  }

  handleScroll = (event) =>{
    if (window.scrollY < 300 && this.state.scrolling === true) {
      this.setState({scrolling: false});
    }
    else if (window.scrollY > 300 && this.state.scrolling !== true) {
      this.setState({scrolling: true});
    }
  }

  render(){
    return(
      <div className={classes.Layout}>
        <Toobar scrolling={this.state.scrolling} />
        <main>
          <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
          <Route path={`${process.env.PUBLIC_URL}/project`} exact component={Project} />
          <Route path={`${process.env.PUBLIC_URL}/mechanical`} exact component={Mechanical} />
          <Route path={`${process.env.PUBLIC_URL}/eletronic`} exact component={Eletronic} />
          <Route path={`${process.env.PUBLIC_URL}/vmachine`} exact component={virtualMachine} />
        </main>
      </div>
    )
  }
}

export default Layout