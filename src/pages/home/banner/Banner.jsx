import photo1 from '../../../assets/images/banner/1.jpg'
import photo2 from '../../../assets/images/banner/2.jpg'
import photo3 from '../../../assets/images/banner/3.jpg'
import photo4 from '../../../assets/images/banner/4.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={photo1} className="w-full" />
                <div className="absolute flex items-center
                bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]
                   h-full left-0 top-0 ">
                    <div className='text-white space-y-7 pl-12  w-1/2 '>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-6'>
                            <button className="btn btn-error text-white">Discover More</button>
                            <button className="btn btn-outline border-white text-white">Secondary</button>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
           
            <div id="slide2" className="carousel-item relative w-full">
                <img src={photo2} className="w-full" />
                <div className="absolute flex items-center
                bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]
                   h-full left-0 top-0 ">
                    <div className='text-white space-y-7 pl-12  w-1/2 '>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-6'>
                            <button className="btn btn-error text-white">Discover More</button>
                            <button className="btn btn-outline border-white text-white">Secondary</button>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
           
            <div id="slide3" className="carousel-item relative w-full">
                <img src={photo3} className="w-full" />
                <div className="absolute flex items-center
                bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]
                   h-full left-0 top-0 ">
                    <div className='text-white space-y-7 pl-12  w-1/2 '>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-6'>
                            <button className="btn btn-error text-white">Discover More</button>
                            <button className="btn btn-outline border-white text-white">Secondary</button>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
           
            <div id="slide4" className="carousel-item relative w-full">
                <img src={photo4} className="w-full" />
                <div className="absolute flex items-center
                bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]
                   h-full left-0 top-0 ">
                    <div className='text-white space-y-7 pl-12  w-1/2 '>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-6'>
                            <button className="btn btn-error text-white">Discover More</button>
                            <button className="btn btn-outline border-white text-white">Secondary</button>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
           
            
           
        </div>
    );
};

export default Banner;