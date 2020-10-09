import React from 'react';
import classes from './experiments.module.css';
import img1 from './doodle.jpg';
import img2 from './demo-store.jpg';
import img3 from './social-network.jpg';
import img4 from './snow.jpg';
import img5 from './clock.jpg';




const Experiments = () => {
 return(
 	<div className={classes.width}>
 		<div className={'text-center ' + classes.text}>My Projects & Experiments <br/>
 		<h4>Web is fun.</h4>
 		</div>
 		<div className={classes.first_row}>
 			<div className={classes.item_1 + ' text-center'}>
 				<span>Simple Doodle Jump with HTML, CSS, Javascript</span><br/>
 				<a href='https://github.com/Liza-Nadieieva' target="_blank">
 					<img src={img1}/>
 				</a>
 			</div>
 			<div className={classes.item_2 + ' text-center ml-2'}>
 				<span>Demo-Store with HTML,CSS,Bootstrap, Javascript</span><br/>
 				<a href='https://github.com/Liza-Nadieieva' target="_blank">
 					<img src={img2}/>
 				</a>
 			</div>
 			<div className={classes.item_3 + ' text-center ml-2'}>
 				<span>Socail-Network with HTML,CSS,Bootstrap, Javascript & React Redux</span><br/>
 				<a href='https://github.com/Liza-Nadieieva' target="_blank">
 					<img src={img3}/>
 				</a>
 			</div>
 		</div>
    <div className={classes.second_row}>
      <div className={classes.item_4 + ' text-center ml-2'}>
        <span>Demo-Store with HTML,CSS</span><br/>
        <a href='https://github.com/Liza-Nadieieva' target="_blank">
          <img src={img4}/>
        </a>
      </div>
      <div className={classes.item_5 + ' text-center ml-2'}>
        <span>In process HTML,CSS,LESS,React,Redux</span><br/>
        <a href='https://github.com/Liza-Nadieieva' target="_blank">
          <img src={img5}/>
        </a>
      </div>
    </div>
 	</div>
 	)
}


export default Experiments;