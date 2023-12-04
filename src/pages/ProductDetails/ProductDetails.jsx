import { BiSolidUpvote } from "react-icons/bi";
import { useLoaderData, } from "react-router";
import AddReview from "../../components/AddReview/AddReview";
import Review from "../../components/Shared/Review/Review";

// import { useParams } from "react-router";


const ProductDetails = () => {

    // const id = useParams();
    // console.log(id);
    const data = useLoaderData();
    console.log("data", data);

    const { image, product_name, tags, description } = data;

    return (
        <div>
            <div className="flex justify-center items-center h-screen ">
                <div>
                    <div className="flex justify-center items-center w-full  md:flex-row flex-col bg-white bg-clip-border shadow-md dark:bg-blue-gray-700">
                        <div className="m-0 w-2/4 shrink-0 overflow-hidden rounded-r-none bg-white bg-clip-border ">
                            <img
                                src={image}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <p className="mb-2 block font-sans text-2xl font-semibold leading-relaxed text-gray-700 dark:text-white antialiased">
                                {product_name}
                            </p>
                            <p className="pt-2">
                                Tags: {Array.isArray(tags) ? tags.join(", ") : ""}
                            </p>
                            <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 dark:text-white antialiased">
                                Description: {description}
                            </p>
                            <div className="p-6 pt-3">
                                <button
                                    className="flex justify-between items-center btn gap-3 bg-black border-2 hover:text-black hover:border-black border-black hover:bg-[#fed700] text-white"
                                >
                                    Upvote<BiSolidUpvote className="text-2xl text-green-700"></BiSolidUpvote>
                                </button>
                                <button
                                    className="flex justify-between items-center btn gap-3 mt-3 bg-black border-2 hover:text-black hover:border-black border-black hover:bg-[#fed700] text-white"
                                    onClick={() => document.getElementById('my_modal_5').showModal()}
                                >
                                    Report
                                </button>
                            </div>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            {/* <button className="btn" >open modal</button> */}
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    {/* <h3 className="font-bold text-lg">Hello!</h3> */}
                                    <p className="py-7 font-semibold text-2xl text-center">want to report?</p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button type="submit" className="btn bg-red-400">Submit</button>
                                            <button className="btn bg-green-600">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>

                    </div>

                </div>
            </div>
            <AddReview></AddReview>
            <Review ></Review>
        </div>
    );
};

export default ProductDetails;