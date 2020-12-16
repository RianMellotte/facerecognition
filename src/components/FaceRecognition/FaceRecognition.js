import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<div className='center'>
			<div className='absolute mt2'>
				<img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
				<div className='bounding-box' style= {{top: [0.2, 0.5] , right: [0.2, 0.5], bottom: [0.2, 0.5], left: [0.2, 0.5]}}></div>
			</div>
		</div>
		)
}

export default FaceRecognition;