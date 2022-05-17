import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: {},
	},
	reducers: {
		loginUser: (state, action) => {
			const myUser = action.payload[0];
			state.user = myUser;
		},
	},
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
