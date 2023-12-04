import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

// eslint-disable-next-line react/prop-types
const ReviewCard = ({ review }) => {


    const { image, name, rating, feedback } = review || {};

    return (
        <div>
            <div className="mt-10 pb-10 pt-10">
                <h4 className="text-3xl text-center font-semibold dark:text-white">Review: </h4>
                <div className="container flex flex-col w-full max-w-lg p-6  border-3 border-black mx-auto divide-y shadow-xl mb-10 rounded-md dark:bg-blue-gray-700">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src={image} alt="img"
                                    className="object-cover w-12 h-12 rounded-full " />
                            </div>
                            <div>
                                <h4 className="font-bold dark:text-white">{name}</h4>

                            </div>
                        </div>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                    <div className="p-4 space-y-2 text-sm text-black">
                        <p className="dark:text-white">{feedback}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;