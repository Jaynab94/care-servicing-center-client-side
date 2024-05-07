
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOutUser()
            .then(result => {
                console.log(result);

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "log out successfully!",
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/login')


            })
            .catch(error => {
                console.log(error.message);
            })

    }

    const navLink = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Services</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>Contact</Link></li>
        {
            user ? <li><Link to={'/bookings'}>My Bookings</Link></li> :
                ''
        }

    </>



    return (
        <div className="navbar bg-base-100 h-28 mb-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {navLink}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-error mr-4">Appointment</button>
                {
                    user ?
                        <button onClick={handleLogOut} className="btn btn-outline btn-error">Logout</button>
                        :
                        <Link className="btn btn-outline btn-error" to={'/login'}>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;