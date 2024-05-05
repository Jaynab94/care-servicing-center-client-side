
import { Link } from 'react-router-dom';
import photo from '../../assets/images/login/login.svg'
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const RegisterPage = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = { name, email, password }
        console.log(newUser);

        //createUser 
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "register successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
            })
            .catch(error => {
                console.error(error.message);
               Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: 'Please try again later!'
               })
                form.reset();
            })




    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-16">
                <div className="text-center lg:text-left">

                    <img src={photo} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center font-bold">Register!</h1>
                    <form onSubmit={handleRegister}
                        className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="your name" name='name' className="input input-bordered" required />
                        </div>
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
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className='btn btn-primary ' type="submit" value="REGISTER" />
                        </div>
                    </form>
                    <div className='flex justify-center gap-4 mb-4'>
                        <FaFacebook></FaFacebook>
                        <FaGoogle></FaGoogle>
                        <FaLinkedin></FaLinkedin>
                    </div>
                    <p className='text-center'>Already have an account <Link className='text-blue-700 ' to={'/login'}> login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;