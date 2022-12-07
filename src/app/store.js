import {configureStore} from '@reduxjs/toolkit'
import imgDownloaderReducer from '../features/imgDownloader/imgDownloaderSlice'

export const store = configureStore({
	reducer: {
		imgDownloader: imgDownloaderReducer,
	},
})
