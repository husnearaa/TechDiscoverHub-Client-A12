import { useEffect, useState } from "react";
import { BiSolidUpvote } from "react-icons/bi";
import { Link } from "react-router-dom";

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
                {products.slice(0, 6).map(({ _id, image, product_name, tags }) => (
                    <div key={_id} className="flex w-full max-w-[26rem] flex-col bg-white bg-clip-border shadow">
                        <img className="shadow" src={image} />
                        <div className="p-6">
                            <div className="mb-3 flex items-center justify-between">
                                <h5 className="block text-left text-xl font-medium">
                                    {product_name}
                                </h5>
                            </div>
                            <p className="block text-left">
                                Tags: {Array.isArray(tags) ? tags.join(", ") : ""}
                            </p>
                        </div>
                        <div className="p-6 pt-3">
                            <button
                                className="flex justify-between items-center btn gap-3 bg-black border-2 hover:text-black hover:border-black border-black hover:bg-[#fed700] text-white"
                            >
                                Upvote<BiSolidUpvote className="text-2xl text-green-700"></BiSolidUpvote>
                            </button>
                        </div>
                    </div>
                ))}
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