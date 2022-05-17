import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
	name: 'users',
	initialState: {
		user: {},
		allUsers: [],
	},
	reducers: {},
});
console.log(usersSlice, 'usersSlice');
export const { addLikes } = usersSlice.actions;

export default usersSlice.reducer;
