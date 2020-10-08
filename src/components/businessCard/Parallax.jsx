import React from 'react';
import ParallaxMousemove from '../../parallax';
import classes from './businessCard.module.css';

class Parallax extends React.Component {
  render() {
    const style = {
      outter: {
        width:'100%',
        position: 'relative'
      }
    }
    return (
      <div className={classes.parallax}>
        <ParallaxMousemove containerStyle={style.outter} fullHeight={true}>
            <ParallaxMousemove.Layer config={{
                xFactor: 0.05,
                yFactor: 0.05,
                springSettings: {
                  stiffness: 20,
                  damping: 20
                }
              }}>
              <img className ={classes.parallax__elem1} src={require('./react.png')} alt="Parallax Layer"></img>
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer config={{
                xFactor: 0.05,
                yFactor: 0.05,
                springSetting: {
                  stiffness: 20,
                  damping: 20
                }
              }}>
              <img className={classes.parallax__elem2} src={require('./js.png')} alt="Parallax Layer"></img>
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                xFactor: 0.05,
                yFactor: 0.05,
                springSetting: {
                  stiffness: 20,
                  damping: 20
                }
              }}>
              <i className={'far fa-heart ' + classes.parallax__elem5}></i>
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                xFactor: 0.05,
                yFactor: 0.05,
                springSetting: {
                  stiffness: 20,
                  damping: 20
                }
              }}>
              <img className={classes.parallax__elem3} src={require('./html.png')} alt="Parallax Layer"></img>
            </ParallaxMousemove.Layer>
             <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                xFactor: 0.05,
                yFactor: 0.05,
                springSetting: {
                  stiffness: 20,
                  damping: 20
                }
              }}>
              <img className={classes.parallax__elem4} src={require('./css.png')} alt="Parallax Layer"></img>
            </ParallaxMousemove.Layer>
        </ParallaxMousemove>
      </div>
    )
  }
}

export default Parallax;