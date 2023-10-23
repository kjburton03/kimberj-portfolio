import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../homie/home";
import { AppList } from "../apps/appList";
import { ContactKimberJ } from "../contactKimberj/contact";
import { Skills } from "../skillz/skills";
import { AboutMe } from "../aboutMe/aboutMe";
import { NashVols } from "../nashVols/nashVols";
import { Responsibly } from "../responsibly/responsibly";
import { NashMurals } from "../nashMurals/nashMurals";

export const ApplicationViews = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />

			<Route path="/home" element={<Home />} />
			<Route path="/appList" element={<AppList />} />
			<Route path="/contactKimberj" element={<ContactKimberJ />} />
			<Route path="/skills" element={<Skills />} />
			<Route path="/aboutMe" element={<AboutMe />} />
			<Route path="/nashVols" element={<NashVols />} />
			<Route path="/nashMurals" element={<NashMurals />} />
			<Route path="/responsibly" element={<Responsibly />} />
		</Routes>
	)
}

