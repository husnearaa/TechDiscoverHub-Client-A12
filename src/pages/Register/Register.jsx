import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from "axios";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        // console.log(data);
        createUser(data.email, data.password, data.photoURL)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // console.log('user profile info updated')
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            image: data.photoURL
                        }
                        axios.post('https://tech-discover-hub-server.vercel.app/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database')
                                }
                            })
                        reset();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');

                    })
                    .catch(error => console.log(error))
            })
    };


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axios.post('https://tech-discover-hub-server.vercel.app/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire("Good job!", "User Logged in Successfully!", "success");
                        // navigate after login 
                        navigate(location?.state ? location.state : '/');
                    })
            })
            .catch(error => {
                console.error(error)
            })
    }




    return (
        <div className="relative min-h-screen">
            <img
                src={'https://i.postimg.cc/Kv22J3vz/login.png'}
                className="absolute h-full w-full "
            />
            <div className=" absolute h-screen w-full place-items-center bg-black/60">
                <h2 className="text-3xl my-8 font-bold text-center text-white">Register</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/3 md:w-1/3 w-4/5 mx-auto text-center place-items-center">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered rounded-full" />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Photo URL</span>
                        </label>
                        <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered rounded-full" />
                        {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered rounded-full" />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password"  {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} placeholder="password" className="input input-bordered rounded-full" />
                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                        {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-[#fed700] text-black  rounded-full border-none" type="submit" value="Sign Up" />
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={handleGoogleSignIn} className="btn bg-[#fed700] text-black  rounded-full border-none">
                            <FcGoogle className="text-3xl"></FcGoogle>
                            Log in with Google
                        </button>
                    </div>
                </form>
                {/* {
                loginError && <p className="text-red-700">{loginError}</p>
            }
            {
                success && <p className="text-green-600">{success}</p>
            } */}
                <p className="text-center text-white mb-20">Already have an Account? <Link
                    className="text-white font-bold text-base mb-10" to='/login'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;