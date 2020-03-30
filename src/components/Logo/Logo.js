import React from 'react';
import Tilt from 'react-tilt';
import pooh from './pooh.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
			 {/*<div className="Tilt-inner"> 🐧 </div>*/}
			 <div className="Tilt-inner pd3">
			 	<img style={{padding: '5px'}} alt='logo' src={pooh}/>
			 </div>
			</Tilt>
		</div>
	);
}

export default Logo;