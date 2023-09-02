import { Route, Routes } from "react-router-dom"
import { ApplicationViews } from "./components/views/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"
import "./Portfolio.css"


export const Portfolio = () => {
	return <Routes>

		<Route path="*" element={
				<>
					<NavBar />
					<ApplicationViews />
				</>

		} />
	</Routes>
}

