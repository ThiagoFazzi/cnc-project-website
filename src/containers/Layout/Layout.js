import React, { Component } from 'react'
import classes from './Layout.module.css'
import { Route } from 'react-router-dom'
import Toobar from '../../components/Toobar/Toobar'
import Home from '../../components/Pages/Home/Home'
import Project from '../../components/Pages/Project/Project'
import Mechanical from '../../components/Pages/Mechanical/Mechanical'
import Eletronic from '../../components/Pages/Eletronic/Eletronic'


class Layout extends Component {

  state = {
    scrolling: false
  }

  componentWillMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) =>{
    if (window.scrollY < 300 && this.state.scrolling === true) {
      this.setState({scrolling: false});
    }
    else if (window.scrollY > 50 && this.state.scrolling !== true) {
      this.setState({scrolling: true});
    }
  }

  render(){
    return(
      <div className={classes.Layout}>
        <Toobar scrolling={this.state.scrolling} />
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/project" exact component={Project} />
          <Route path="/mechanical" exact component={Mechanical} />
          <Route path="/eletronic" exact component={Eletronic} />
        </main>
      </div>
    )
  }
}

export default Layout