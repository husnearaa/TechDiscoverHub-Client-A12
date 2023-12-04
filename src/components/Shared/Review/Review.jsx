
import { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';


const Review = () => {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('https://tech-discover-hub-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])



    return (
        <div>

            {
                reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
            }


        </div>
    );
};

export default Review;





