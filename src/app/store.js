import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import activityReducer from "../features/activity/activitySlice";
import adminReducer from "../features/admin/adminSlice";

export default configureStore({
	reducer: {
		user: userReducer,
		activity: activityReducer,
		admin: adminReducer,
	},
});
