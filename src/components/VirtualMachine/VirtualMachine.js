import React, { useState } from 'react'
import classes from './VirtualMachine.module.css';
import baseImage from '../../assets/images/cnc-virtual-1.png'
import axisXImage from '../../assets/images/cnc-virtual-2.png'
import axisYImage from '../../assets/images/cnc-virtual-3.png'
import axisZImage from '../../assets/images/cnc-virtual-4.png'


const virtualMachine = () => {
 
  const [positionX, setPositionX] = useState(30);
  const [positionY, setPositionY] = useState(1);
  const [positionZ, setPositionZ] = useState(145);


  const styles = {
    base: {
      width: '500px',
      height: '400px',
      border: '1px solid black',
      backgroundImage: `url(${baseImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '-170px 30px'    
    },
    xAxis: {
      position: 'relative',
      top: '116px',
      width: '90px',
      height: '55%',
      transform: `translateX(${positionX}px)`,
      backgroundImage: `url(${axisYImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0px 0px'
    },
    yAxis: {
      position:  'relative',
      width: '100%',
      height: '100%',
      marginTop: '46px',
      marginLeft: '45px',
      transform: `translate(${positionY/20}px, -${positionY/25}px) `,
      
      backgroundImage: `url(${axisXImage})`,
      backgroundSize: '79%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0px 0px'
    },
    zAxis: {
      width: '90px',
      height: '65px',
      transform: `translateY(${positionZ}px)`,
      backgroundImage: `url(${axisZImage})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0px 0px'
      
    },
  }


  return(
    <div className={classes.VirtualMachine} >
      <h1>Virtual Machine</h1>
      <div style={styles.base}>
        <div style={styles.yAxis}>
          <div style={styles.xAxis}>
            <div style={styles.zAxis}></div>
          </div>
        </div>
      </div>
      <div className={classes.Controls}>
        <button onClick={() => positionX > 0 ? setPositionX(positionX - 10) : setPositionX(positionX)} >Left</button>
        <button onClick={() => positionX < 470 ? setPositionX(positionX + 10): setPositionX(positionX)}>Right</button>
        <button onClick={() => positionZ > 0 ? setPositionZ(positionZ - 10): setPositionZ(positionZ)}>Up</button>
        <button onClick={() => positionZ < 370 ? setPositionZ(positionZ + 10): setPositionZ(positionZ)}>Down</button>
        <button onClick={() => positionY < 100  ? setPositionY(positionY + 1): setPositionY(positionY)}>Front</button>
        <button onClick={() => positionY > -100 ? setPositionY(positionY - 1): setPositionY(positionY)}>Back</button>
      </div>
    </div>
  )
}

export default virtualMachine