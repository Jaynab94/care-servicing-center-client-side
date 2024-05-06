import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";


const PopularProduct = () => {

    const [products, setProducts] = useState();
    console.log(products);



    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])



    return (
        <div className="mt-10">
            <div className="text-center space-y-4 ">
                <h1 className="text-2xl font-bold text-[#FF3811]">Popular Product</h1>
                <h1 className="text-5xl font-bold ">Browse Our Products</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    products?.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
                }
            </div>

            <div className="flex justify-center mt-8 mb-8"><button className="btn btn-outline font-bold text-orange-500 ">More product</button></div>
        </div>
    );
};

export default PopularProduct;