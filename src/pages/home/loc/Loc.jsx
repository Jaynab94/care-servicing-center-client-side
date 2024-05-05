
import { FaCalendar, FaMobile } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';

const Loc = () => {
    return (
        <div className=" h-60 mt-10 bg-black rounded-lg flex  items-center justify-evenly text-white">
            <div className="flex text-white items-center gap-4">
                <FaCalendar className='text-2xl'></FaCalendar>
                <div>
                    <p>We are open monday-friday</p>
                    <h1 className='text-2xl font-semibold'>7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <FaMobile className='text-2xl'></FaMobile>
                <div>
                    <p>Have a question?</p>
                    <h1 className='text-2xl font-semibold'>+2546 - 251 - 2658</h1>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <FaLocationPin className='text-2xl'></FaLocationPin>
                <div >
                    <p>Need a repair? our address</p>
                    <h1 className='text-2xl font-semibold'>Liza Street, New York</h1>
                </div>
            </div>

        </div>
    );
};

export default Loc;