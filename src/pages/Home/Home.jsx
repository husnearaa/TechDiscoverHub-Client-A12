
import DisCover from "../../components/DisCover/DisCover";
import Banner from "../../components/Shared/Banner/Banner";
import FeaturedProduct from "../../components/Shared/FeaturedProduct/FeaturedProduct";
import TrendingProduct from "../../components/Shared/TrendingProduct/TrendingProduct";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProduct></FeaturedProduct>
            <TrendingProduct></TrendingProduct>
            <DisCover></DisCover>
        </div>
    );
};

export default Home;