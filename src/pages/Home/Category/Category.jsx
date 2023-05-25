import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// import image from folder
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section className="mt-20">
            <SectionTitle
                heading={"ORDER ONLINE"}
                subHeading={"From 11:00am to 10:00pm"}
            >
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="menu-category" />
                    <h3 className="text-4xl uppercase text-center -mt-14 text-gray-100">salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="menu-category" />
                    <h3 className="text-4xl uppercase text-center -mt-14 text-gray-100">soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="menu-category" />
                    <h3 className="text-4xl uppercase text-center -mt-14 text-gray-100">pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="menu-category" />
                    <h3 className="text-4xl uppercase text-center -mt-14 text-gray-100">desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="menu-category" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-gray-100">salads</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;