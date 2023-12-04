import React, { useEffect, useState } from "react";

import ProductsCard from "./ProductsCard";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://tech-discover-hub-server.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, [])

    return (
        <div>
            <div>
                <div className="mx-auto md:w-3/12 ">
                    <h2 className="text-4xl font-extrabold text-center py-10 border-b-2 border-black">Products</h2>
                </div>
                <div className="mx-auto md:w-4/6">
                    <p className="text-center font-medium py-6 text-sm md:text-base">Explore Our Diverse Range of High-Quality Products.
                        Experience Quality and Style in Every Purchase.
                        Browse, Click, Enjoy – Your Perfect Product Awaits.
                        Elevate Your Lifestyle with Our Curated Selection.Shop with Confidence.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-10'>
                {
                    products.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default Products;