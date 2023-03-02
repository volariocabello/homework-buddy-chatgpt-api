import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
	const { googleSignIn, user } = UserAuth();
	const navigate = useNavigate();

	const handleGoogleSignIn = async () => {
		await googleSignIn();
	};

	useEffect(() => {
		if (user != null) {
			navigate("/dashboard");
		}
	}, [user]);

	return (
		<div className='Login'>
			<GoogleButton onClick={handleGoogleSignIn} />
		</div>
	);
}

export default Login;
