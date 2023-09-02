import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../homie/home";
import { AppList } from "../apps/appList";
import { ContactKimberJ } from "../contactKimberj/contact";
import { Skills } from "../skillz/skills";
import { AboutMe } from "../aboutMe/aboutMe";

export const ApplicationViews = () => {
	return (
		<Routes>
			<Route path="/home" element={<Home />} />
			<Route path="/appList" element={<AppList />} />
			<Route path="/contactKimberj" element={<ContactKimberJ />} />
			<Route path="/skills" element={<Skills />} />
			<Route path="/aboutMe" element={<AboutMe />} />
		</Routes>
	)
}

