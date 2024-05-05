import About from "../about/About";
import Banner from "../banner/Banner";
import Loc from "../loc/Loc";
import PopularProduct from "../popularProduct/PopularProduct";
import Services from "../services/Services";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Loc></Loc>
            <PopularProduct></PopularProduct>
            

        </div>
    );
};

export default Home;