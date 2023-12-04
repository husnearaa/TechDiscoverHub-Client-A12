import { BiSolidUpvote } from "react-icons/bi";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const TrendingProductCard = ({ product }) => {


    const { _id, image, product_name, tags } = product || {};

    return (
        <div>
            <div>
                <div className="flex w-full max-w-[18rem] flex-col place-items-center mx-auto bg-white bg-clip-border shadow">
                    <img className="shadow" src={image} />
                    <div className="p-6">

                        <div className="mb-3 flex items-center justify-between">
                            <Link to={`products-data/${_id}`}>
                                <h5 className="block text-left text-xl font-medium">
                                    {product_name}
                                </h5>
                            </Link>
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
            </div>
        </div>
    );
};

export default TrendingProductCard;