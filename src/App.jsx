import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<div>
			<AuthContextProvider>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/dashboard' element={<Dashboard />} />
				</Routes>
			</AuthContextProvider>
		</div>
	);
}

export default App;
