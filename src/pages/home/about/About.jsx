import aboutPerson from '../../../assets/images/about_us/person.jpg'
import aboutPrs from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero mt-10 P-4">
            <div className="hero-content flex-col lg:flex-row">

                <div className='lg:w-1/2 relative  '>
                    <img src={aboutPerson} className=" lg:w-3/4 rounded-lg shadow-2xl" />
                    <img src={aboutPrs} className='w-1/2 absolute rounded-lg top-1/2 right-5 border-8 border-white' alt="" />
                </div>
                <div className='lg:w-1/2 space-y-6'>


                    <h2 className=" text-[#FF3811] font-bold text-2xl">About us</h2>
                    <h1 className="text-5xl  font-bold">We are qualified <br /> & of experience <br />in this field</h1>


                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-error text-white">Discover More</button>

                </div>
            </div>
        </div>
    );
};

export default About;