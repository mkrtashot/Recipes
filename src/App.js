import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/sign_up/SignUp";
import Profile from "./pages/profile/Profile";
import Recipes from "./pages/recipes/Recipes";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/recipes" element={<Recipes />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
