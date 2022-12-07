import React from 'react'
import {useDispatch} from 'react-redux'
import {dowloader} from '../features/imgDownloader/imgDownloaderSlice'

export const Input = () => {
	const dispatch = useDispatch()

	const handleDownload = (e) => {
		const files = e.target.files

		for (let i = 0; i < files.length; i++) {
			const src = URL.createObjectURL(files[i])
			dispatch(dowloader(src))
		}
	}

	return (
		<div>
			<input type='file' onChange={(e) => handleDownload(e)} multiple></input>
		</div>
	)
}
