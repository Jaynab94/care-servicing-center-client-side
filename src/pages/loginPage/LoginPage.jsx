
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg'
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

import Swal from 'sweetalert2';

const LoginPage = () => {
    const { signInUser } = useContext(AuthContext);
    const navigate= useNavigate();




    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const data = { email, password }
        console.log(data);
        //signInUser
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "log in successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
            })
            .catch(error => {
                console.log(error.message);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message,
                });
            })
           navigate('/')



    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 mr-10">

                    <img src={logo} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin}
                        className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className='btn btn-primary' type="submit" value="Login" />
                        </div>
                    </form>
                    <div className='flex justify-center gap-6 mb-4'>
                        <FaGoogle></FaGoogle>
                        <FaFacebook></FaFacebook>
                        <FaLinkedin></FaLinkedin>

                    </div>
                    <p className='text-center p-2'>New to Car doctore <Link className='text-blue-700' to={'/register'}>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;