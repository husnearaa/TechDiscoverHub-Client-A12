import { useEffect, useState } from "react";
import { BiSolidUpvote } from "react-icons/bi";

const Products = () => {
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
                {products.map(({ _id, image, product_name, tags }) => (
                    <div key={_id} className="flex w-full max-w-[18rem] flex-col place-items-center mx-auto bg-white bg-clip-border shadow">
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
        </div>
    );
};

export default Products;