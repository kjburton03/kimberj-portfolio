import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../homie/home";
import { AppList } from "../apps/appList";

export const ApplicationViews = () => {
	return (
		<Routes>
			<Route path="/home" element={<Home />} />
			<Route path="/appList" element={<AppList />} />
		</Routes>
	)
}

