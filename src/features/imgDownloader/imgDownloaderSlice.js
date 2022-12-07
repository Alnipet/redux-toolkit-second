import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	images: [],
}

export const imgDownloaderSlice = createSlice({
	name: 'imgDownloader',
	initialState,
	reducers: {
		dowloader: (state, action) => {
			state.images.push(action.payload)
		},
	},
})

export const {dowloader} = imgDownloaderSlice.actions
export default imgDownloaderSlice.reducer
