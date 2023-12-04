import { useEffect, useState } from "react";
import FeaturedProductCard from "./FeaturedProductCard";

const FeaturedProduct = () => {

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
            <div>
                <div className="mx-auto md:w-3/12 ">
                    <h2 className="text-4xl font-extrabold text-center py-10 border-b-2 border-black">Featured <span className="text-[#fed700]">Product</span></h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-10'>
                    {
                        products.slice(0, 4).map(product => <FeaturedProductCard key={product._id} product={product}></FeaturedProductCard>)
                    }

                </div>
            </div>
        </div>
    );
};

export default FeaturedProduct;