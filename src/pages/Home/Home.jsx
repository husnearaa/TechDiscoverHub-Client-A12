
import Banner from "../../components/Shared/Banner/Banner";
import FeaturedProduct from "../../components/Shared/FeaturedProduct/FeaturedProduct";
// import TrendingProduct from "../../components/Shared/TrendingProduct/TrendingProduct";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProduct></FeaturedProduct>
            {/* <TrendingProduct></TrendingProduct> */}
        </div>
    );
};

export default Home;