import React from 'react';
import GoogleLogin from 'react-google-login';
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons";
import logo from "../public/assets/logowhite.png";
import Image from 'next/image';

function Login() {
    const responseGoogle = (response) => {

    }

    return (
        <div className='flex justify-start items-center flex-col h-screen'>
            <div className="relative w-full h-full">
                <div className="w-full h-full custom-bg" />
                <div className="absolute flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0">
                    <div className="p-5">
                        <Image src={logo} alt="Logo" />
                    </div>
                    <div className="shadow-2xl">
                        <GoogleLogin
                            clientId=''
                            render={(renderProps) => (
                                <button
                                    type='button'
                                    className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}>
                                    <FcGoogle className="mr-4" />SignIn with Google
                                </button>
                            )}
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy="single_host_origin"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;