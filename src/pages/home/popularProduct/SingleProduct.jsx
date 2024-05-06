import { FaStar } from "react-icons/fa";


const SingleProduct = ({ product }) => {
    const { photo, title,price } = product;

    return (
        <div className="card w-96  mt-6 border shadow-xl hover:border hover:border-green-500 hover:scale-105 transition">
            <figure className="px-10 pt-10">
                <img className=" " src={photo} />
            </figure>
            <div className="rating rating-md flex justify-center mt-4">
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                <p className="font-bold text-orange-600 text-2xl">{price}</p>

            </div>

            
        </div>
    );
};

export default SingleProduct;