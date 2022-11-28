import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
	name: 'count', // state name
	initialState: { value: 0 }, // set default state value to 0
	reducers: {
		increment: state => {
			state.value++
		},
		decrement: state => {
			// logical operator "&&" to avoid decrementing below 0
			state.value > 0 && state.value--
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload
		},
		decrementByAmount: (state, action) => {
			// logical operator "&&" to avoid decrementing below 0
			state.value >= 10 && (state.value -= action.payload)
		},
		reset: state => {
			state.value = 0
		}
	},
})

export const { increment, decrement, incrementByAmount, decrementByAmount, reset } = counterSlice.actions
export default counterSlice.reducer
