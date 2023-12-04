import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";



const AddReview = ({ review }) => {

    const { user } = useContext(AuthContext);

    const { name } = review || {};
    const handleAddReview = event => {
        event.preventDefault();

        const form = event.target;
        const rating = form.rating.value;
        const feedback = form.feedback.value;

        const addedReview = { name, rating, feedback }

        console.log(addedReview);


        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Feedback Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }



    return (
        <div>
            <div>
                <div className="mt-10 mb-10">
                    <div className="bg-gray-100 p-24 mx-auto lg:w-4/5 md:w-4/5 w-2/1 dark:bg-blue-gray-700">
                        <div>
                            <h4 className="font-bold dark:text-white">{name}</h4>

                        </div>
                        <form onSubmit={handleAddReview} className="">
                            {/* form  row */}
                            <div className="mb-8">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold text-base text-black dark:text-white">Rating</span>
                                    </label>
                                    <label className="">
                                        <input type="text" name="rating" placeholder="rating" required className="input input-bordered rounded-sm  w-full dark:bg-gray-100" />
                                    </label>
                                    <label className="label">
                                        <span className="label-text font-semibold text-base text-black dark:text-white">Your Review</span>
                                    </label>
                                    <textarea name="feedback" id="" required cols="30" rows="6" className="dark:bg-gray-100"></textarea>
                                </div>
                            </div>
                            <input type="submit" value="Submit" className="btn  bg-black border-2 hover:text-black hover:border-black border-black hover:bg-[#fed700] text-white  rounded-sm  w-full " />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;