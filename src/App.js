import { CssBaseline } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Slider from "./components/Slider"
import ContactForm from "./ContactForm"
import Dashboard from "./Dashboard"
import ExitPage from "./ExitPage"

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Slider />} />
					<Route path="/dashboard" element={<Dashboard />} />

					<Route path="/contactform" element={<ContactForm />} />
					<Route path="/exitpage" element={<ExitPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
