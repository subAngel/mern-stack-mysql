import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import TaksPage from "./pages/TaksPage";
import TaskForm from "./pages/TaskForm";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<TaksPage />} />
				<Route path="/new" element={<TaskForm />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
