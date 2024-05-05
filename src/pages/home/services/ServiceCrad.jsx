import { IoArrowForwardSharp } from "react-icons/io5";
import PropTypes from 'prop-types'


const ServiceCrad = ({ service }) => {
    console.log(service);
    const { img, price, title } = service;



    return (
        <div className="card w-96  shadow-xl border">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>

                <div className="card-actions end ">
                    <p className="font-bold text-[20px] text-[#FF3811]">Price :${price}</p>
                    <button className="btn btn-ghost" ><IoArrowForwardSharp className="text-[#FF3811] text-2xl"></IoArrowForwardSharp> </button>
                </div>
            </div>
        </div>
    );
};

ServiceCrad.propTypes = {
    service: PropTypes.shape({
        img: PropTypes.string,
        price: PropTypes.number,
        title: PropTypes.string,
    })
}

export default ServiceCrad;