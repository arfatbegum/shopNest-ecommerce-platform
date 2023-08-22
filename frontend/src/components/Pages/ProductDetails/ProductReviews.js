import React from "react";
import ReactStars from "react-rating-stars-component";

const ProductReviews = ({ product }) => {
    console.log(product?.ratings)

    return (
        <div className="p-4">
            <div className="flex flex-col justify-start items-start w-full">
                <div className="flex justify-start items-start">
                    <p className="text-xl font-semibold text-gray-800">{product?.ratings?.length} Reviews</p>
                </div>
                {product?.ratings?.length > 0 && product?.ratings.map((rating) => (
                    <div key={rating._id} className="w-full flex justify-start items-start flex-col bg-gray-50">
                        <div className="w-full">
                            <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
                                <div>
                                    <img src="https://i.ibb.co/RCTGZTc/Mask-Group-1.png" alt="girl-avatar" />
                                </div>
                                <div className="flex flex-col justify-start items-start space-y-2">
                                    <p className="text-base font-medium leading-none text-gray-800">Arfat</p>
                                    <p className="text-sm leading-none text-gray-600"> {new Date().toLocaleDateString()}</p>
                                </div>
                            </div>
                            <div className="mt-3">
                                <ReactStars
                                    count={5}
                                    size={24}
                                    value={rating.star}
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                                <p className=" text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6">{rating.comment}</p>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div >
    );
};

export default ProductReviews;
