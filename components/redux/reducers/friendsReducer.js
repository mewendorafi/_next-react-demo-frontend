import { createSlice } from '@reduxjs/toolkit'

export const friendsSlice = createSlice({
	name: 'friends', // state name
	initialState: [], // set default friends state value as an empty array
	reducers: {
		addFriendToStore: (state, action) => {
			state.push(action.payload)
		},
		removeFriendFromStore: (state, action) => {
			state.pop() // remove last added friend
			//TODO -> create user with ID to filter by ID
		},
		resetFriendsInStore: state => {
			return [] // reset as an empty array
		},
	},
})

export const { addFriendToStore, removeFriendFromStore, resetFriendsInStore } = friendsSlice.actions
export default friendsSlice.reducer
