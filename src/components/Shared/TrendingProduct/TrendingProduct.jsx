import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TrendingProductCard from "./TrendingProductCard";

const TrendingProduct = () => {


    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, [])



    return (
        <div>
            <div className="mx-auto md:w-3/12 mt-8">
                <h2 className="text-4xl font-extrabold text-center py-10 border-b-2 border-black">Trending <span className="text-[#fed700]">Product</span></h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-10'>


                {
                    products.slice(0, 6).map(product => <TrendingProductCard key={product._id} product={product}></TrendingProductCard>)
                }

            </div>
            <div className="flex items-center justify-center">
                <Link to={"/products"}>
                    <button className="btn bg-black border-2 hover:border-black border-black hover:bg-[#fed700] hover:text-black text-white my-10 text-center">
                        Show All Products
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default TrendingProduct;