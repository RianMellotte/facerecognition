import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<div className='center'>
			<div className='absolute mt2'>
				<img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
				<div className='bounding-box' style= {box.forEach(face => 
					return {
						top: face.topRow, 
						right: face.rightCol, 
						bottom: face.bottomRow, 
						left: face.leftCol})}>
				</div>
			</div>
		</div>
		)
}

export default FaceRecognition;