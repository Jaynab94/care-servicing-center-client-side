import { useEffect, useState } from "react";
import ServiceCrad from "./ServiceCrad";



const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/add')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className="mt-14">
            <div className="space-y-4">
                <h1 className="text-2xl text-center font-bold text-[#FF3811]">Service</h1>
                <h1 className="font-bold text-5xl text-center">Our Service Area</h1>
                <p className="text-center">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {
                    services.map(service => <ServiceCrad key={service._id} service={service}></ServiceCrad>)
                }
            </div>

            <div className="flex justify-center mt-6"><button className="btn font-bold btn-outline text-orange-500">More services</button></div>
        </div>
    );
};

export default Services;