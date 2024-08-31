import { useEffect, useState } from "react";

import SectionTitle from "../../../components/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() =>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data => setReviews(data))
    })
    return (
        <section className="my-20">
            <SectionTitle subHeading={'What Our Clients Say'} heading={'testimonials'}/>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review =><SwiperSlide >
                            <div className="flex flex-col items-center m-24">
                            <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            />
                        <p className="my-8">{review.details}</p>
                        <h3 className="text-3xl text-orange-400 uppercase">{review.name}</h3>
                            </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;