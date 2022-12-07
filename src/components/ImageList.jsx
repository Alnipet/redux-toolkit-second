import React from 'react'
import {useSelector} from 'react-redux'

export const ImageList = () => {
	const images = useSelector((state) => state.imgDownloader.images)

	const imgArr = images.map((el, i) => {
		return (
			<div className='img-inner'>
				<img width='200' height='200' src={el} alt=''></img>
			</div>
		)
	})

	return <div className='img-wrapper'>{imgArr.reverse()}</div>
}
