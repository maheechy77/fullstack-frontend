import { createSlice } from "@reduxjs/toolkit";

export const activitySlice = createSlice({
	name: "activity",
	initialState: {
		activity: [],
	},
	reducers: {
		setActivities: (state, action) => {
			state.activity = action.payload;
		},
	},
});

export const { setActivities } = activitySlice.actions;

export const selectActivity = (state) => state.activity.activity;

export default activitySlice.reducer;
