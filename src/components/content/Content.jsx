import React from 'react';
import classes from './content.module.css';

const Content = () => {
 return(
 	<div className={classes.block}>
 		<div className={classes.block_about}>
 			<span><strong>Hi</strong>, I'm Liza, a 23-year-old <span>junior Front-end developer</span>, located in Kiyv, Ukraine.
 			I'm curious girl, who likes making cool things with web technologies.</span><br/>
 			<span>(Привет, я <span>начинающий front-end разработчик</span> из Киева. Любознательная, обожаю делать крутые вещи с использованием веб технологий)</span>
 		</div>
 		<div className={classes.block_skills}>
 			<h4>Technical Skills<span>.</span> Навыки</h4>
 			<ul>
 				<li>HTML</li>
 				<li>CSS</li>
 				<li>LESS/SASS</li>
 				<li>Bootstrap</li>
 				<li>Flexbox Grid</li>
 				<li>Git</li>
 				<li>Javascript</li>
 				<li>OOP</li>
 				<li>React</li>
 				<li>Redux</li>
        <li>Thunk</li>
        <li>Saga</li>
 			</ul>
 		</div>
 		<div className={classes.block_education}>
 			<h4>Education<span>.</span> Образование</h4>
 			<ul>
 				<li>Tula State Lev Tolstoy
					Pedagogical University, The Faculty of Foreign Languages(French, English)</li>
	 			<ul> <strong>Courses</strong>
	 				<li>It Education Academy - HTML, CSS</li>
	 				<li>It Education Academy - Javascript</li>
	 			</ul>
 			</ul>
 		</div>
 		<div className={classes.block_language}>
 			<h4>Languages<span>.</span> Языки</h4>
 			<ul>
 				<li>French - B1</li>
 				<li>English - upper-intermediate</li>
 			</ul>
 		</div>
 	</div>
 	)
}


export default Content;
