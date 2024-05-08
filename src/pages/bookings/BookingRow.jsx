import Swal from "sweetalert2";


const BookingRow = ({ booking, handleDelete, handleConfirm }) => {

    const { customer, Total_paid, date, _id, customer_Eamil, services_img, services_title, status } = booking;




    return (


        <tr>
            <th>

                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask  w-24 h-24">
                            <img src={services_img} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>

                        <div className="text-sm opacity-50"> {customer_Eamil}</div>
                        <div className="text-sm opacity-50"> { }</div>
                    </div>
                </div>
            </td>
            <td>
                {
                    Total_paid
                }

            </td>

            <td>{date}</td>
            <td>{services_title}</td>
            <th>
                {
                    status === 'confirm' ?<span className="font-bold text-white border bg-green-600 rounded-full p-2">confirmed</span>
                    :
                        <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs"> Please Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;