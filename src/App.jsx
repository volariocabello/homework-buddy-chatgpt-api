import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Protected from "./components/Protected";

function App() {
	return (
		<div>
			<AuthContextProvider>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route
						path='/dashboard'
						element={
							<Protected>
								<Dashboard />
							</Protected>
						}
					/>
				</Routes>
			</AuthContextProvider>
		</div>
	);
}

export default App;
