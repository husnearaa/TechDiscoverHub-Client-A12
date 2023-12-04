

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";







const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login page', location);
    const [loginError, setLoginError] = useState('');
    const [success, setSuccess] = useState('');


    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        // console.log(form);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);



        // reset error and success
        setLoginError('');
        setSuccess('');



        // add validation and log in
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                // setSuccess('User Logged in Successfully.')
                setSuccess,
                    Swal.fire("Good job!", "User Logged in Successfully!", "success");

                // navigate after login 
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                // setLoginError(error.message);
                setLoginError,
                    Swal.fire("Oops!", "Your email or password is invalid!", "error");
            })
    }



    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                setSuccess,
                Swal.fire("Good job!", "User Logged in Successfully!", "success");


                // navigate after login 
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
            })
    }




    return (
        <div className="relative min-h-screen ">
            <img
                src={'https://i.postimg.cc/Kv22J3vz/login.png'}
                className="absolute h-full w-full "
            />
            <div className=" absolute h-screen w-full place-items-center bg-black/60">
                <h2 className="text-3xl my-8 font-bold text-center text-white">Login</h2>
                <form onSubmit={handleLogin} className="lg:w-1/3 md:w-1/3 w-4/5 mx-auto text-center place-items-center">
                    <div className="form-control">
                       
                        <input type="email" placeholder="Email" name="email" className="input input-bordered mb-5 rounded-full" required />
                    </div>
                    <div className="form-control">
                       
                        <input type="password" placeholder="Password" name="password" className="input input-bordered mb-5 rounded-full" required />
                
                    </div>
                    <div className="form-control">
                        <button className="btn bg-[#fed700] text-black mb-5 rounded-full border-none">Sign In</button>
                    </div>
                    <div className="form-control">
                        <button onClick={handleGoogleSignIn} className="btn bg-[#fed700] text-black  rounded-full border-none">
                            <FcGoogle className="text-3xl"></FcGoogle>
                            Log in with Google
                        </button>
                    </div>
                </form>
                {
                    loginError && <p className="text-red-700">{loginError}</p>
                }
                {
                    success && <p className="text-green-600">{success}</p>
                }
                <p className="text-center mt-4 mb-20 pb-5 text-white text-sm">Don't have an Account? <Link
                    className="text-white font-bold text-base mb-10" to='/register'>Register</Link></p>

            </div>
        </div>
    );
};

export default Login;