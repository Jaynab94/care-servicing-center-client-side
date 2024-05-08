import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import axios from "axios";


const Bookings = () => {
    const [bookings, setBookings] = useState();

    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;


    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setBookings(res.data);
               
            })
        // fetch(url)
        //     .then(response => response.json())
        //     .then(data => setBookings(data))
    }, [url])


    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }

                    })

                const remainedBookings = bookings.filter(booking => booking._id !== id);
                setBookings(remainedBookings);

            }


        });

    }

    const handleConfirm = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })


        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Your order has been confirmed',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    const remainedBookings = bookings.filter(booking => booking._id !== id);
                    const update = bookings.find(booking => booking._id === id);
                    update.status = 'confirm';
                    const newBookings = [update, ...remainedBookings];
                    setBookings(newBookings);
                }
            })


    }

    return (
        <div>
            <h1>bookings{bookings?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">


                    <tbody>

                        {
                            bookings?.map(booking =>

                                <BookingRow key={booking._id}
                                    handleDelete={handleDelete}
                                    handleConfirm={handleConfirm}

                                    booking={booking}></BookingRow>)
                        }




                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Bookings;