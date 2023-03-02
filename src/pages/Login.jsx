import React from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";

function Login() {
	const { googleSignIn, user } = UserAuth();

	const handleGoogleSignIn = async () => {
		await googleSignIn();
	};

	return (
		<div className='Login'>
			<GoogleButton onClick={handleGoogleSignIn} />
		</div>
	);
}

export default Login;
