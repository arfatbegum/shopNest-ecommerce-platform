import React, { useState } from 'react';
import { FiSend } from "@react-icons/all-files/fi/FiSend";
import ReactStars from 'react-rating-stars-component';
import { useDispatch } from 'react-redux';
import { addRating } from '../../../redux/features/products/productSlice';
import { toast } from 'react-toastify';

const ReviewForm = ({ product }) => {
    const dispatch = useDispatch();
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Review Send Successfully!")
        const data = {
            star: rating,
            comment: review,
            productId: product._id,
        };
        dispatch(addRating(data));
        setRating(0);
        setReview('');
    };

    return (
        <div className="lg:w-[500px] w-full lg:m-4 bg-white">
            <form onSubmit={handleSubmit}>
                <div className='flex justify-between gap-3'>
                    <div className="w-1/2">
                        <h1 className="text-gray-900 text-xl mb-3 font-bold">Rate Us</h1>
                    </div>
                    <div className="w-1/2">
                        <ReactStars
                            count={5}
                            size={24}
                            value={rating}
                            onChange={(newRating) => setRating(newRating)}
                            activeColor="#ffd700"
                        />
                    </div>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Review</label>
                    <textarea
                        id="message"
                        name="message"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        className="w-full bg-white border border-gray-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                </div>
                <button className="w-full flex items-center justify-center text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary text-lg" type="submit">
                    <FiSend className='text-xl text-white mr-2' />Post Review
                </button>
            </form>
        </div>
    );
};

export default ReviewForm;