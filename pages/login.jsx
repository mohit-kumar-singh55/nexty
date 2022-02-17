import React from 'react';
import GoogleLogin from 'react-google-login';
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons";
import shareVideo from "../public/assets/share.mp4";
import logo from "../public/assets/logowhite.png";

function Login() {
    return (
        <div>
            <video src={shareVideo} autoPlay muted loop />
        </div>
    )
}

export default Login;