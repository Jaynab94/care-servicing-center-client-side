import { useLoaderData, useNavigate } from "react-router-dom";
import cheakOut from '../../assets/images/checkout/checkout.png'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { TbSort09 } from "react-icons/tb";


const CheckOutPage = () => {
    const services = useLoaderData();
    console.log(services);
    const { title, _id, price, img } = services;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleBookOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const amount = form.amount.value;
        const email = user?.email;
        const order = {
            customer: name,
            date,
            Total_paid: amount,
            customer_Eamil: email,
            services_Id: _id,
            services_title: title,

            services_img: img,

        }
        console.log(order);

        //bookings collection
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        icon:'success',
                        title: 'Your order has been placed successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                form.reset();
                navigate('/');

            })



    }

    return (
        <div>


            <div className="min-h-screen ">

                <img className="w-full" src={cheakOut} alt="" />
                <div className=" flex-col lg:flex-row">
                    <h1 className="text-center text-4xl font-bold mt-6 ">Check Out: <span className="font-bold text-orange-600 ">{title}</span></h1>

                    <div className="mt-8">
                        <form onSubmit={handleBookOrder}>
                            <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" name="date" className="input input-bordered" required />

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Amount</span>
                                    </label>
                                    <input type="text" defaultValue={'$' + price} name="amount" className="input input-bordered" required />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />

                                </div>





                            </div>


                            <div className=" mt-6 w-full">

                                <input className="btn w-full btn-error" type="submit" value="Order" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOutPage;